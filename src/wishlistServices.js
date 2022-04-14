import axios from "axios";
import { removeFromCart } from "./CardService";

export const handleAddToWishlist = (wishlist, item, dispatch) => {
  const isItemPresent = wishlist.find(
    (itemInWishlist) => itemInWishlist._id === item._id
  );
  if (!isItemPresent) {
    addToWishlist(item, dispatch);
    removeFromCart(item._id, dispatch);
  }
};

export const addToWishlist = (item, dispatch) => {
  try {
    dispatch({ type: "SET_WISHLIST", payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (id, dispatch) => {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`api/user/wishlist/${id}`);
    dispatch({ type: "SET_WISHLIST", payload: wishlist });
  } catch (error) {
    console.log("Error in wishlist service", error);
  }
};
