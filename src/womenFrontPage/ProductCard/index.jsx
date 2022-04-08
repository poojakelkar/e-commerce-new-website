import { Favorite } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, updateProductQty } from "../../CardService";
import { StateContext } from "../../Context";
import {
  Button,
  Card,
  CategoryName,
  Image,
  ImgInfo,
  ImgTitle,
  ProductImg,
  SideContainer,
  Wishlist,
  WishListAndAddToCart,
} from "./styles";

const ProductCard = ({ item }) => {
  const { state, dispatch } = useContext(StateContext);
  let navigate = useNavigate();
  const [cartButtonText, setCartButtonText] = useState("ADD TO CART");
  const handleAddToCart = (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
    const isItemPresent = state.cart.find(
      (itemInCart) => itemInCart._id === item._id
    );
    if (cartButtonText === "ADD TO CART") {
      if (!isItemPresent) {
        addToCart(item, dispatch);
        setCartButtonText("GO TO CART");
      } else {
        const isItemPresentInWishList = state.wishlist.find(
          (itemInWishlist) => itemInWishlist._id === item._id
        );
        if (isItemPresentInWishList !== undefined) {
          updateProductQty(item._id, dispatch, "increment");
        }
        setCartButtonText("GO TO CART");
      }
    } else {
      navigate("/cart");
    }
  };

  const openSingleProductPage = (e) => {
    // alert("openSingleProductPage");
    // console.log(e.target.className);
    // if (e.target.className !== { Button }) {
    //   navigate(`/product/${item._id}`);
    // }
  };

  return (
    <SideContainer>
      <Card>
        <ProductImg key={item._id}>
          <Image src={item.image} onClick={openSingleProductPage} />
          <ImgInfo>
            <ImgTitle>{item?.title}</ImgTitle>
            <CategoryName>Rs.{item?.price}</CategoryName>
          </ImgInfo>
          <WishListAndAddToCart>
            <Link to="/wishlist">
              <Wishlist>
                <Favorite />
              </Wishlist>
            </Link>
            <Button onClick={handleAddToCart}>{cartButtonText}</Button>
          </WishListAndAddToCart>
        </ProductImg>
      </Card>
    </SideContainer>
  );
};

export default ProductCard;
