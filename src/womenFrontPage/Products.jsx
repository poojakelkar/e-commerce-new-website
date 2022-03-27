import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Heading = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    transition: all 0.8s ease;
`
const Container = styled.div`
    flex:1;
    margin: 0px 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
     
    &:hover ${Heading}{
        opacity: 1;
    }
`
const Image = styled.img`
    height: 70%;
    width: 100%;
    object-fit: cover;
`

const Icon = styled.div`
    margin: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    transform: all 1.5s ease;

    &:hover{
        background-color: teal;
        transform: scale(1.1);
        color: white;
    }
`

export const Products = ({item}) => {
  return (
        <Container>
            <Image src={item.img}></Image>
            <Link to='/product-list'>
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
      )
}
