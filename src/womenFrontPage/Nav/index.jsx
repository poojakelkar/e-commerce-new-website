import React from "react";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import {
  Center,
  Container,
  Input,
  Item,
  Lang,
  Left,
  Logo,
  NavComponent,
  Right,
  SearchContainer,
  StyledLink,
} from "./styles";

export const Nav = () => {
  return (
    <Container>
      <NavComponent>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search style={{ color: "grey", fontSize: 16 }}></Search>
          </SearchContainer>
        </Left>
        <StyledLink to="/">
          <Center>
            <Logo>WOMEN.</Logo>
          </Center>
        </StyledLink>
        <Right>
          <StyledLink to="/Login">
            <Item>LOGIN</Item>
          </StyledLink>
          <Item>USER</Item>
          <Item>
            <StyledLink to="/cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </StyledLink>
          </Item>
        </Right>
      </NavComponent>
    </Container>
  );
};
