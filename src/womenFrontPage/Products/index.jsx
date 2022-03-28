import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Heading, Icon, Image } from "./styles";

export const Products = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Link to="/product-list">
        <Heading>
          <Icon>
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </Icon>
          <Icon>
            <SearchOutlined></SearchOutlined>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined></FavoriteBorderOutlined>
          </Icon>
        </Heading>
      </Link>
    </Container>
  );
};
