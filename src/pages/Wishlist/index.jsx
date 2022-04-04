import { DeleteOutlined } from "@material-ui/icons";
import image1 from "../../assets/whishlist1.jpeg";
import React from "react";
import { Link } from "react-router-dom";
import { useCounter } from "../../counterContext";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  Bottom,
  Color,
  Container,
  DeleteProduct,
  FinalAmount,
  Heading,
  Hr,
  Id,
  Name,
  Price,
  Product,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ShoppingButton,
  Size,
  Text,
  Top,
  TopHeading,
  TopText,
  Wrapper,
} from "./styles";

const Wishlist = () => {
  const { state, dispatcher } = useCounter();
  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>

      <Wrapper>
        <Heading>YOUR WISHLIST</Heading>

        <Top>
          <Link to="/product-list">
            <ShoppingButton>CONTINUE SHOPPING</ShoppingButton>
          </Link>
          <TopHeading>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <TopText>Shopping Bag(2)</TopText>
            </Link>
            <TopText>Your Wishlist(1)</TopText>
          </TopHeading>
          <Link to="/cart">
            <ShoppingButton type="filled">CHECKOUT NOW</ShoppingButton>
          </Link>
        </Top>

        <Bottom>
          <Text>
            <Product>
              <ProductDetails>
                <ProductImage src={image1}></ProductImage>
                <ProductInfo>
                  <Name>
                    <b>Product: </b>JUMPSUIT FOR WOMEN
                  </Name>
                  <Id>
                    <b>Product: </b>11022
                  </Id>
                  <Color color="pink" />
                  <Size>
                    <b>Product: </b>32.5
                  </Size>
                </ProductInfo>
              </ProductDetails>
              <Price>
                <DeleteProduct>
                  <DeleteOutlined />
                </DeleteProduct>
                <FinalAmount>RS. 1600</FinalAmount>
              </Price>
            </Product>
            <Hr />
          </Text>
        </Bottom>
      </Wrapper>

      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};

export default Wishlist;
