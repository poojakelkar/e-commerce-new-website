import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border: 1px solid teal;
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
`;
const Input = styled.input`
    font-size: 16px;
    font-weight: 400;
    min-width: 40%;
    padding: 10px;
    flex: 1;
    margin: 20px 10px 0px 0px;
`

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    margin: 20px 10px 0px 0px;
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
const Link = styled.a`
    margin: 20px 0px 0px 0px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
`

export const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Heading>LOGIN</Heading>

            <Form>
                <Input placeholder='Username'></Input>
                <Input placeholder='Password'></Input>   
            </Form>
            <Button>Sign Up</Button>
            <Link>REMEMBER ME!</Link> 
            <Link>CREATE NEW ACCOUNT</Link>
        </Wrapper>
       
    </Container>
  )
}
