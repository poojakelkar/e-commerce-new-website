import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart, updateProductQty } from "../../CardService";
import { StateContext } from "../../Context";
import { addToWishlist } from "../../wishlistServices";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  AddToCart,
  AddToWishlist,
  Color,
  ColorFilter,
  ColorTitle,
  Container,
  Filter,
  Image,
  Info,
  InfoContainer,
  Price,
  ProductImage,
  ProductSize,
  Size,
  Title,
  Wrapper,
} from "./styles";

const SingleProduct = ({ item }) => {
  const { productId } = useParams();
  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: "GET",
        });
        const data = await res.json();
        setProductItem(data.product);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [productId]);

  const { state, dispatch } = useContext(StateContext);
  let navigate = useNavigate();
  const [cartButtonText, setCartButtonText] = useState("ADD TO CART");

  const handleAddToCart = (e) => {
    const isItemPresent = state.cart.find(
      (itemInCart) => itemInCart._id === item._id
    );
    if (cartButtonText === "ADD TO CART") {
      if (!isItemPresent) {
        addToCart(item, dispatch);
        setCartButtonText("GO TO CART");
      } else {
        const isItemPresentInWishList = state?.wishlist?.find(
          (itemInWishlist) => itemInWishlist._id === item._id
        );
        if (!isItemPresentInWishList) {
          addToWishlist(item, dispatch);
          updateProductQty(item._id, dispatch, "increment");
        }
        setCartButtonText("GO TO CART");
      }
    } else {
      navigate("/cart");
    }
  };

  const handleAddToWishlist = (wishlist, item, dispatch) => {
    const isItemPresent = wishlist?.find(
      (itemInWishlist) => itemInWishlist._id === item._id
    );
    if (!isItemPresent) {
      addToWishlist(item, dispatch);
      removeFromCart(item._id, dispatch);
    }
  };

  console.log(productItem);
  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>

      <Wrapper>
        <ProductImage>
          <Image src={productItem?.image}></Image>
        </ProductImage>

        <InfoContainer>
          <Title>{productItem?.title}</Title>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas
            sapiente voluptate amet labore vitae praesentium? Quas, maxime? Sint
            sit inventore esse iure delectus error molestias eaque deleniti
            earum ad!
          </Info>
          <Price>Rs.{productItem?.price}</Price>
          <Filter>
            <ColorFilter>
              <ColorTitle>Color: </ColorTitle>
              <Color color="Green"></Color>
              <Color color="Pink"></Color>
              <Color color="Blue"></Color>
            </ColorFilter>
          </Filter>

          <Filter>
            <ColorTitle>Size: </ColorTitle>
            <Size>
              <ProductSize>XS</ProductSize>
              <ProductSize>S</ProductSize>
              <ProductSize>M</ProductSize>
              <ProductSize>L</ProductSize>
              <ProductSize>XL</ProductSize>
            </Size>
          </Filter>
          <AddToWishlist
            onClick={() => handleAddToWishlist(state.wishlist, item, dispatch)}
          >
            Add To Wishlist
          </AddToWishlist>
          <AddToCart onClick={handleAddToCart}>{cartButtonText}</AddToCart>
        </InfoContainer>
      </Wrapper>

      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};

export default SingleProduct;
