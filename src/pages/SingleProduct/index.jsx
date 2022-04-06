import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../CardService";
import { StateContext } from "../../Context";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  Add,
  AddContainer,
  AddToCart,
  Amount,
  AmountContainer,
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
  Sub,
  Title,
  Wrapper,
} from "./styles";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productItem, setProductItem] = useState({});
  const { state, dispatch } = useContext(StateContext);
  //product/product_id
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

  const handleAddToCart = () => {
    const isItemPresent = state.cart.find((item) => item._id === productId);
    isItemPresent === undefined && addToCart(productItem, dispatch);
    navigate("/cart");
  };

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

          <AddContainer>
            <AmountContainer>
              <Sub>-</Sub>
              <Amount>1</Amount>
              <Add>+</Add>
            </AmountContainer>
            <AddToCart onClick={handleAddToCart}>Add To Cart</AddToCart>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};

export default SingleProduct;
