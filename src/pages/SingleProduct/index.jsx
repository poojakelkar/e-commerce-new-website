import React from "react";
import { Link } from "react-router-dom";
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
  //product/product_id
  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>

      <Wrapper>
        <ProductImage>
          <Image src="https://media.istockphoto.com/photos/blonde-young-woman-in-floral-spring-summer-dress-picture-id682499872?b=1&k=20&m=682499872&s=170667a&w=0&h=HOdWkdS7QluvUB4WBpWP1-K_KMp2HM_WUt4of8HCGXQ="></Image>
        </ProductImage>

        <InfoContainer>
          <Title>Floral Dress</Title>
          <Info>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quas
            sapiente voluptate amet labore vitae praesentium? Quas, maxime? Sint
            sit inventore esse iure delectus error molestias eaque deleniti
            earum ad!
          </Info>
          <Price>Rs.600</Price>
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
            <Link to="/cart">
              <AddToCart>Add To Cart</AddToCart>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};

export default SingleProduct;
