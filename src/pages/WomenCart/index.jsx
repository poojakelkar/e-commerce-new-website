import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  Add,
  Amount,
  AmountContainer,
  Bottom,
  Checkout,
  Color,
  Container,
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
  Remove,
  ShoppingButton,
  Size,
  Summary,
  SummaryHeading,
  SummaryPrice,
  SummaryProduct,
  SummaryText,
  Text,
  Top,
  TopHeading,
  TopText,
  Wrapper,
} from "./styles";
import { useCounter } from "../../counterContext";
const WomenCart = () => {
  const { state, dispatcher } = useCounter();

  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>

      <Wrapper>
        <Heading>YOUR BAG</Heading>

        <Top>
          <Link to="/product-list">
            <ShoppingButton>CONTINUE SHOPPING</ShoppingButton>
          </Link>
          <TopHeading>
            <TopText>Shopping Bag(2)</TopText>
            <Link to="/wishlist" style={{ textDecoration: "none" }}>
              <TopText>Your Wishlist(1)</TopText>
            </Link>
          </TopHeading>
          <ShoppingButton type="filled">CHECKOUT NOW</ShoppingButton>
        </Top>

        <Bottom>
          <Text>
            <Product>
              <ProductDetails>
                <ProductImage src="https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></ProductImage>
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
                <AmountContainer>
                  <Remove onClick={() => dispatcher({ type: "decrement" })}>
                    -
                  </Remove>
                  <Amount>{state?.count}</Amount>
                  <Add onClick={() => dispatcher({ type: "increment" })}>+</Add>
                </AmountContainer>
                <FinalAmount>RS. 1600</FinalAmount>
              </Price>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <ProductImage src="https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></ProductImage>
                <ProductInfo>
                  <Name>
                    <b>Product: </b>SHRUG FOR WOMEN
                  </Name>
                  <Id>
                    <b>Product: </b>11052
                  </Id>
                  <Color color="black" />
                  <Size>
                    <b>Product: </b>37.5
                  </Size>
                </ProductInfo>
              </ProductDetails>
              <Price>
                <AmountContainer>
                  <Remove onClick={() => dispatcher({ type: "decrement" })}>
                    -
                  </Remove>
                  <Amount>{state.count}</Amount>
                  <Add onClick={() => dispatcher({ type: "increment" })}>+</Add>
                </AmountContainer>
                <FinalAmount>RS. 1000</FinalAmount>
              </Price>
            </Product>
          </Text>
          <Summary>
            <SummaryHeading>ORDER SUMMARY</SummaryHeading>
            <SummaryProduct>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>RS. 2600</SummaryPrice>
            </SummaryProduct>
            <SummaryProduct>
              <SummaryText>Shipping Fees</SummaryText>
              <SummaryPrice>FREE</SummaryPrice>
            </SummaryProduct>
            <SummaryProduct>
              <SummaryText>Discount</SummaryText>
              <SummaryPrice>RS. -500</SummaryPrice>
            </SummaryProduct>
            <SummaryProduct type="total">
              <SummaryText>Total Amount</SummaryText>
              <SummaryPrice>RS. 2100</SummaryPrice>
            </SummaryProduct>
            <Checkout>CHECKOUT NOW</Checkout>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};

export default WomenCart;
