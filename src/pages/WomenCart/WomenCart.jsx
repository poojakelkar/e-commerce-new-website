import React from "react";
import { Announce } from "../../womenFrontPage/Announce";
import { Footer } from "../../womenFrontPage/Footer";
import { LastFooter } from "../../womenFrontPage/LastFooter";
import { Nav } from "../../womenFrontPage/Nav";
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
/**
 Auth Routes
Products Routes
1. GET /api/products - public
2. GET /api/products/:productId - public
Category Routes
1. GET /api/categories - public
2. GET /api/category/:categoryId - public
Cart Routes
1. GET /api/user/cart - private
2. POST /api/user/cart - private
3. DELETE /api/user/cart/:productId - private
4. POST /api/user/cart/:productId - private
Wishlist Routes
1. GET /api/user/wishlist - private
2. POST /api/user/wishlist - private
3. DELETE /api/user/wishlist/:productId - private
 */

const WomenCart = () => {
  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>

      <Wrapper>
        <Heading>YOUR BAG</Heading>

        <Top>
          <ShoppingButton>CONTINUE SHOPPING</ShoppingButton>
          <TopHeading>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
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
                  <Add>+</Add>
                  <Amount>2</Amount>
                  <Remove>-</Remove>
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
                  <Add>+</Add>
                  <Amount>1</Amount>
                  <Remove>-</Remove>
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
