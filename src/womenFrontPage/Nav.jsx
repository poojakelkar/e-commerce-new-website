import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const NavComponent = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px", marginLeft: "10px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Item = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const StyledLink  = styled(Link)`
     //some CSS styles here
     text-decoration: none;
     color: black;
`;

export const Nav = () => {
    return (
        <Container>
            <NavComponent>
                <Left>
                    <Lang>EN</Lang>
                    <SearchContainer>
                        <Input placeholder='Search'></Input>
                        <Search
                            style={{ color: "grey", fontSize: 16 }}></Search>
                    </SearchContainer>
                </Left>
                <StyledLink to='/'>
                    <Center>
                        <Logo>WOMEN.</Logo>
                    </Center>
                </StyledLink>
                <Right>
                    <StyledLink to='./Login'>
                        <Item>LOGIN</Item>
                    </StyledLink>
                    <Item>USER</Item>
                    <Item>
                        <StyledLink to='/cart'>
                            <Badge badgeContent={2} color='primary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </StyledLink>
                    </Item>
                </Right>
            </NavComponent>
        </Container>
    );
};
