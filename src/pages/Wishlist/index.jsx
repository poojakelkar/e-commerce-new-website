import { DeleteOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  Bottom,
  Container,
  DeleteProduct,
  FinalAmount,
  Heading,
  Hr,
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
import { StateContext } from "../../Context";
import ProductCard from "../../womenFrontPage/ProductCard";

const Wishlist = ({ item }) => {
  const { state } = useContext(StateContext);

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
              <TopText>Shopping Bag({state.cart.length})</TopText>
            </Link>
            <TopText>Your Wishlist({state.wishlist.length})</TopText>
          </TopHeading>
          <Link to="/cart">
            <ShoppingButton type="filled">CHECKOUT NOW</ShoppingButton>
          </Link>
        </Top>

        <Bottom>
          <Text>
            {" "}
            {state.wishlist.length === 0 ? (
              <>
                <h4>Your wishlist is empty!</h4>
              </>
            ) : (
              <>
                {state.wishlist.map((item) => (
                  <Product>
                    <ProductDetails>
                      <ProductImage src={item.image}></ProductImage>
                      <ProductInfo>
                        <Name>
                          <b>Product: </b>
                          {item.title}
                        </Name>
                        <Size>
                          <b>Product: </b>32.5
                        </Size>
                      </ProductInfo>
                      <ProductCard item={item} />
                      <Price>
                        <DeleteProduct>
                          <DeleteOutlined />
                        </DeleteProduct>
                        <FinalAmount>RS. {item.price}</FinalAmount>
                      </Price>
                    </ProductDetails>
                  </Product>
                ))}
              </>
            )}
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
