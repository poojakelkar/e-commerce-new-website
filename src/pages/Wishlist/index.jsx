import { DeleteOutlined, Star } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  Bottom,
  Button,
  Category,
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
import { removeFromWishlist } from "../../wishlistServices";
import { addToCart, updateProductQty } from "../../CardService";

const Wishlist = ({ item }) => {
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
        updateProductQty(item._id, dispatch, "increment");
        setCartButtonText("GO TO CART");
      }
    } else {
      navigate("/cart");
    }
  };
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
                        <Category>
                          Product Ratings: <Star style={{ color: "orange" }} />
                          {item.rating}
                        </Category>
                      </ProductInfo>
                      <Price>
                        <DeleteProduct>
                          <DeleteOutlined
                            onClick={(e) =>
                              removeFromWishlist(item._id, dispatch)
                            }
                          />
                        </DeleteProduct>
                        <FinalAmount>RS. {item.price}</FinalAmount>
                        <Button onClick={handleAddToCart}>
                          {cartButtonText}
                        </Button>
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
