import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

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
`
const Text = styled.div`
    font-size: 20px;
    margin: 20px;
    font-weight: 500;
    letter-spacing: 1px;
`
const InputContainer = styled.div`
    display: flex;
`
const Input = styled.input`
    width: 30vw;
    margin: 0px 8px;
`
const Button = styled.button`
    background-color: teal;
    color: white;
    border:none;
    padding: 10px;

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
