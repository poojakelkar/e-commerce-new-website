import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 40vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Heading = styled.h1`
    font-size: 40px;
    margin: 10px;
    ${mobile({textAlign: 'center'})}
`
const Text = styled.div`
    font-size: 20px;
    margin: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    ${mobile({textAlign: 'center'})}
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:50%;
    height: 40px;
    ${mobile({width: '80%'})}
`
const Input = styled.input`
    width: 50%;
    height: 40px;
    margin: 0px 8px;
    ${mobile({width: '90%'})}
`
const Button = styled.button`
    background-color: teal;
    color: white;
    border:none;
    padding: 8px;
    

    &:hover{
        background-color: #66B2B2;
    }
`

export const Footer = () => {
  return (
    <Container>
        <Heading>Feedback</Heading>
        <Text>Share your valuable feedback with us!</Text>
        <InputContainer>
            <Input placeholder='Type Feedback...'></Input>
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}
