import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {Badge} from '@material-ui/core'

const Container= styled.div`
    height: 60px;
`
const NavComponent = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left  =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Center  = styled.div`
    flex: 1;
    text-align: center;
`
const Logo  = styled.h1`
    font-weight: bold;
`
const Right  =styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Item = styled.div`
    font-size:14px;
    cursor: pointer;
    margin-left: 25px;
`

export const Nav = () => {
  return (
    <Container>
         <NavComponent>
            <Left>
                <Lang>EN</Lang>
                <SearchContainer>
                    <Input></Input>
                    <Search style={{color:"grey", fontSize: 16}}></Search>
                </SearchContainer>
            </Left>
            <Center><Logo>WOMEN.</Logo></Center>
            <Right>
                <Item>REGISTER</Item>
                <Item>SIGN IN</Item>
                <Item>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </Item>
            </Right>
         </NavComponent>
    </Container>
  )
}
