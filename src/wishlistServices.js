import axios from "axios";
import { removeFromCart } from "./CardService";

export const handleAddToWishlist = (wishlist, item, dispatch) => {
  const isItemPresent = wishlist.find(
    (itemInWishlist) => itemInWishlist._id === item._id
  );
  if (isItemPresent === undefined) {
    addToWishlist(item, dispatch);
    removeFromCart(item._id, dispatch);
  }
};

export const addToWishlist = (item, token, dispatch) => {
  try {
    fetch("/api/user/wishlist", {
      method: "POST",
      body: JSON.stringify({ product: item }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "SET_WISHLIST", payload: data.wishlist })
      );
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (id, token, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`api/user/wishlist/${id}`);
    dispatch({ type: "SET_WISHLIST", payload: wishlist });
  } catch (error) {
    console.log("Error in wishlist service", error);
  }
};
