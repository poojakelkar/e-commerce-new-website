import React from "react";
import styled from "styled-components";
import { Announce } from "../womenFrontPage/Announce";
import { Footer } from "../womenFrontPage/Footer";
import { LastFooter } from "../womenFrontPage/LastFooter";
import { Nav } from "../womenFrontPage/Nav";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const ShoppingButton = styled.button`
  padding: 20px;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "20px" })}
`;

const TopHeading = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 20px;
  text-align: center;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Text = styled.div`
  flex: 3;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
  object-fit: cover;
`;
const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Name = styled.span``;
const Id = styled.span``;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Size = styled.span``;

const Price = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  ${mobile({ margin: "5px 15px" })}
`;
const Add = styled.div``;
const Amount = styled.div`
  //font-size: 24px;
  margin: 10px;
  font-weight: 500;
`;
const Remove = styled.div``;
const FinalAmount = styled.div`
  font-size: 22px;
  font-weight: 500;
  ${mobile({ margin: "20px" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid teal;
  height: 45vh;
  border-radius: 10px;
  padding: 20px;
`;
const SummaryHeading = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;
const SummaryProduct = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  letter-spacing: 1.5px;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "22px"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;

const Checkout = styled.button`
  padding: 10px;
  width: 100%;
  background-color: teal;
  color: white;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.5px;
  border: none;
`;

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

export const WomenCart = () => {
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
