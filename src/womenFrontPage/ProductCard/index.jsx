import { Favorite } from "@material-ui/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CategoryName,
  Image,
  ImgInfo,
  ImgTitle,
  ProductImg,
  SideContainer,
  Wishlist,
  WishListAndAddToCart,
} from "./styles";

const ProductCard = ({ item }) => {
  let navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };

  const openSingleProductPage = (e) => {
    console.log(e.target.className);
    if (e.target.className !== { Button }) {
      navigate(`/product/${item._id}`);
    }
  };

  return (
    <SideContainer>
      <Card>
        <ProductImg key={item._id}>
          <Image src={item.image} onClick={openSingleProductPage} />
          <ImgInfo>
            <ImgTitle>{item?.title}</ImgTitle>
            <CategoryName>Rs.{item?.price}</CategoryName>
          </ImgInfo>
          <WishListAndAddToCart>
            <Link to="/wishlist">
              <Wishlist>
                <Favorite />
              </Wishlist>
            </Link>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </WishListAndAddToCart>
        </ProductImg>
      </Card>
    </SideContainer>
  );
};

export default ProductCard;
