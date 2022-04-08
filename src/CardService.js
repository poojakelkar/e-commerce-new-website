import axios from "axios";
export const addToCart = (item, dispatch) => {
  try {
    // fetch("/api/user/cart", {
    //   method: "POST",
    //   body: JSON.stringify({ product: item }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "set_cart");
    //     dispatch({ type: "SET_CART", payload: data.cart });
    //   });
    dispatch({ type: "SET_CART", payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const updateProductQty = async (id, dispatch, actionType) => {
  try {
    const {
      data: { cart },
    } = await axios.post(`api/user/cart/${id}`, {
      action: {
        type: actionType,
      },
    });
    dispatch({ type: "SET_CART", payload: cart });
  } catch (error) {
    console.log("Error in updateQtyFromCart service", error);
  }
};

export const removeFromCart = async (id, dispatch) => {
  try {
    // const {
    //   data: { cart },
    // } = await axios.delete(`api/user/cart/${id}`);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  } catch (error) {
    console.log("Error in cart service", error);
  }
};

export const findPriceOfAllItems = (cart) => {
  const totalPrice = cart.reduce((acc, curr) => {
    acc = acc + curr.price * (typeof curr?.qty === "number" ? curr?.qty : 1);
    return acc;
  }, 0);
  return totalPrice;
};

export const calculateFinalCartPrice = (
  totalPrice,
  totalDiscount,
  DeliveryCharges
) => {
  return totalPrice - totalDiscount + DeliveryCharges;
};
