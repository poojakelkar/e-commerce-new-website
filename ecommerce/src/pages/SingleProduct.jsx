import React from 'react'
import styled from 'styled-components'
import { Announce } from '../womenFrontPage/Announce'
import { Footer } from '../womenFrontPage/Footer'
import { LastFooter } from '../womenFrontPage/LastFooter'
import { Nav } from '../womenFrontPage/Nav'
import { mobile } from '../responsive'

const Container =  styled.div`
  
`
const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  ${mobile({padding: '20px', flexDirection:'column'})}
`
const ProductImage = styled.div`
  flex:1
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover; 
  ${mobile({height: '40vh'})}
`
const InfoContainer = styled.div`
  flex:1;
  margin: 0px 20px;
`
const Title = styled.h1`
  font-weight: 400;
  letter-spacing: 1.5px;
`
const Info = styled.p`
  width: 90%;
  margin: 20px 0px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1.5px;

`
const Price = styled.p`
  font-size: 40px;
`
const Filter = styled.div`
  display: flex;
  margin: 20px 0px;
`
const ColorFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`
const ColorTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: 10px 0px;
`
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props=> props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const Size = styled.select`
  padding: 5px;
  margin: 0px 10px; 
`
const ProductSize = styled.option`
  font-size: 16px;
`
const AddContainer = styled.div`
  display: flex;
  margin: 40px 0px;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
`
const Sub = styled.span`
  margin: 0px 20px 0px 0px;
`
const Amount = styled.span`
  margin: 0px 20px 0px 0px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Add = styled.span`
`
const AddToCart = styled.button`
  margin-left: 30px;
  background-color: teal;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border: none;
  padding: 10px;

  &:hover{
    background-color: #66B2B2;
  }
`


export const SingleProduct = () => {
  return (
    <Container>
        <Announce></Announce>
        <Nav></Nav>

          <Wrapper>
            <ProductImage>
                <Image src="https://media.istockphoto.com/photos/blonde-young-woman-in-floral-spring-summer-dress-picture-id682499872?b=1&k=20&m=682499872&s=170667a&w=0&h=HOdWkdS7QluvUB4WBpWP1-K_KMp2HM_WUt4of8HCGXQ="></Image>
            </ProductImage>

            <InfoContainer>
                <Title>Floral Dress</Title>
                <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Eius quas sapiente voluptate amet labore vitae praesentium? Quas, 
                  maxime? Sint sit inventore esse iure delectus error molestias eaque deleniti earum ad!</Info>
                <Price>Rs.600</Price>
                <Filter>
                  <ColorFilter>
                      <ColorTitle>Color: </ColorTitle>
                      <Color color="Green"></Color>
                      <Color color="Pink"></Color>
                      <Color color="Blue"></Color>
                  </ColorFilter>
                </Filter>
                
                <Filter>
                  <ColorTitle>Size: </ColorTitle>
                  <Size>
                    <ProductSize>XS</ProductSize>
                    <ProductSize>S</ProductSize>
                    <ProductSize>M</ProductSize>
                    <ProductSize>L</ProductSize>
                    <ProductSize>XL</ProductSize>
                    </Size>
                </Filter>

                <AddContainer>
                    <AmountContainer>
                        <Sub>-</Sub>
                        <Amount>1</Amount>
                        <Add>+</Add>
                    </AmountContainer>
                    <AddToCart>Add To Cart</AddToCart>
                </AddContainer>
                
            </InfoContainer>
          </Wrapper>

        <Footer></Footer>
        <LastFooter></LastFooter>
    </Container>
  )
}
