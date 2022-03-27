import { Facebook, Instagram, LocationOn, Phone, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 10px;
`
const Logo = styled.h1`   
`
const Info = styled.p`
    margin: 10px 0px;
    letter-spacing: 1.5px;
`
const CenterFirst = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display: 'none'})}
`
const List = styled.ul`
    margin-top: 10px;
`
const ListContent = styled.li`
    font-size: 20px;
    color: gray;
    font-weight: 500;
    letter-spacing: 1.5px;
    list-style: none;
    padding-bottom: 20px;
    cursor: pointer;
    

    &:hover{
        color: black;
    }
`
const CenterSecond = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor: 'lightgray'})}
`

const SecondHeading = styled.h1``

const Email = styled.p`
    font-size: 20px;
    margin: 10px;
    letter-spacing: 1.5px;
    color: grey;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        color: black;
    }
`
const Location = styled.p`
    padding: 10px 0px;;
`
const Locate = styled.p`
    display: flex;
    align-items: center;
    font-size: 18px;
`

const Right = styled.div`
    flex:1;
    padding: 20px;
`
const RightHeading = styled.h1``

const Social = styled.div`  
    display: flex; 
`
const Icon = styled.div`
    padding: 5px;
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center; 
`

export const LastFooter = () => {
  return (
    <Container>
        <Left>
            <Logo>WOMEN.</Logo>
            <Info>Copyright @ [WOMEN & 2022]. Any illegal reproduction of this content will 
                result in immediate legal action. Like in the example, your YouTube copyright 
                disclaimer can just be the copyright symbol (or “C” or “Copyright”).
            </Info>
        </Left>
        <CenterFirst>
            <List>
                <ListContent>Career</ListContent>
                <ListContent>Become a Supplier</ListContent>
                <ListContent>Women Blog</ListContent>
                <ListContent>Terms and Conditions</ListContent>
            </List>
        </CenterFirst>

        <CenterSecond>
            <SecondHeading>Contact Us</SecondHeading>
            <Email>query@women.com</Email>
            <Location>
                <Locate><LocationOn></LocationOn>122 Keshav Road, Mumbai 230532</Locate>
            </Location>
            <Location>
                <Locate><Phone/>+ 91 123 9999 134</Locate>
            </Location>
        </CenterSecond>

        <Right>
        <RightHeading>Reach Out to us!</RightHeading>
        <Social>
               <Icon color='395693'>
                   <Facebook></Facebook>
               </Icon>
               <Icon color='D72C71'>
                   <Instagram></Instagram>
               </Icon>
               <Icon color='24CC63'>
                   <WhatsApp></WhatsApp>
               </Icon>
            </Social>
        </Right>
    </Container>
  )
}
