import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 30px;
    background-color: white;
    border: 1px solid teal;
    ${mobile({width: '75%'})}
`
const Heading = styled.h1`
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 1.5px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`
const Input = styled.input`
    font-size: 16px;
    font-weight: 400;
    min-width: 40%;
    padding: 8px 1px;
    flex: 1;
    margin: 20px 20px;
`
const Agree = styled.span`
    font-size: 18px;
    margin: 10px 20px;
    display: flex;
    align-items: center;
`
const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    margin: 5px 20px ;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;

    &:hover{
        background-color: #66B2B2;
    }
`
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`

const Forget = () => {
  return (
    <Container>
    <Wrapper>
        <Heading>FORGET PASSWORD</Heading>
        <Form>
                <Input placeholder='Email Id'></Input>
                <Input placeholder='New Password'></Input>   
                <Input placeholder='Re-Enter Password'></Input>  
            <Agree><Checkbox/>I am accepting all the terms and condition</Agree>    
        </Form>
        <Button>Change Password</Button>
    </Wrapper>
</Container>
  )
}

export default Forget
