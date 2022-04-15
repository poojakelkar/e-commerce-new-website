import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StateContext } from "../../Context";
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

const SingleProduct = () => {
  let navigate = useNavigate();
  const { productId } = useParams();
  const [productItem, setProductItem] = useState({});
  const { state, dispatch } = useContext(StateContext);

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

  console.log(productItem);
  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>

      <Wrapper>
        <ProductImage>
          <Image src={productItem.image}></Image>
        </ProductImage>

        <InfoContainer>
          <Title>{productItem.title}</Title>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas
            sapiente voluptate amet labore vitae praesentium? Quas, maxime? Sint
            sit inventore esse iure delectus error molestias eaque deleniti
            earum ad!
          </Info>
          <Price>Rs.{productItem.price}</Price>
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
          <AddToWishlist>Add To Wishlist</AddToWishlist>
          <AddToCart>Add To Cart</AddToCart>
        </InfoContainer>
      </Wrapper>

      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};

export default SingleProduct;
