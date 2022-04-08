import { Link } from "react-router-dom";
import image1 from "../../assets/whishlist1.jpeg";
import image2 from "../../assets/whishlist2.jpeg";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
import {
  Add,
  AddtoWishlist,
  Amount,
  AmountContainer,
  Bottom,
  ButtonContainer,
  Checkout,
  Color,
  Container,
  FinalAmount,
  Heading,
  Hr,
  Name,
  Price,
  Product,
  ProductDetails,
  ProductImage,
  ProductInfo,
  Remove,
  RemoveFromCart,
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
import { useContext } from "react";
import { StateContext } from "../../Context";
import {
  calculateFinalCartPrice,
  findPriceOfAllItems,
  removeFromCart,
  updateProductQty,
} from "../../CardService";
import { handleAddToWishlist } from "../../wishlistServices";

const WomenCart = () => {
  const { state, dispatch } = useContext(StateContext);
  const totalPrice = findPriceOfAllItems(state.cart);
  const finalCartPrice = calculateFinalCartPrice(totalPrice, 500, 50);
  return (
    <>
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

          {state.cart.length === 0 ? (
            <>
              <h3>Your cart is empty!</h3>
            </>
          ) : (
            <>
              {" "}
              {state.cart.map((item) => {
                return (
                  <Bottom>
                    <Text>
                      <Product>
                        <ProductDetails>
                          <ProductImage src={item.image}></ProductImage>
                          <ProductInfo>
                            <Name>
                              <b>Product: </b>
                              {item.title}
                            </Name>
                            <Color color="pink" />
                            <Size>
                              <b>Product: </b>32.5
                            </Size>
                          </ProductInfo>
                        </ProductDetails>
                        <Price>
                          <AmountContainer>
                            <Remove
                              onClick={(e) =>
                                item.qty > 1 &&
                                updateProductQty(
                                  item._id,
                                  dispatch,
                                  "decrement"
                                )
                              }
                            >
                              -
                            </Remove>
                            <Amount>{item.qty}</Amount>
                            <Add
                              onClick={(e) =>
                                updateProductQty(
                                  item._id,
                                  dispatch,
                                  "increment"
                                )
                              }
                            >
                              +
                            </Add>
                          </AmountContainer>
                          <FinalAmount>{item.price}</FinalAmount>
                        </Price>
                        <ButtonContainer>
                          <AddtoWishlist
                            onClick={(e) =>
                              handleAddToWishlist(
                                state.wishlist,
                                item,
                                dispatch,
                                null
                              )
                            }
                          >
                            Add To Wishlist
                          </AddtoWishlist>
                          <RemoveFromCart
                            onClick={(e) => removeFromCart(item._id, dispatch)}
                          >
                            Remove From Cart
                          </RemoveFromCart>
                        </ButtonContainer>
                      </Product>
                      <Hr />
                    </Text>
                  </Bottom>
                );
              })}
            </>
          )}
          <Summary>
            <SummaryHeading>ORDER SUMMARY</SummaryHeading>
            <SummaryProduct>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>RS. {totalPrice}</SummaryPrice>
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
              <SummaryPrice>RS.{finalCartPrice}</SummaryPrice>
            </SummaryProduct>
            <Checkout>CHECKOUT NOW</Checkout>
          </Summary>
        </Wrapper>
        <Footer></Footer>
        <LastFooter></LastFooter>
      </Container>
    </>
  );
};

export default WomenCart;
