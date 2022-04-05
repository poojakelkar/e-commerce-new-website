import axios from "axios";
export const addToCart = (item, dispatch) => {
  try {
    fetch("/api/user/cart", {
      method: "POST",
      body: JSON.stringify({ product: item }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_CART", payload: data.cart }));
  } catch (error) {
    console.log(error);
  }
};
