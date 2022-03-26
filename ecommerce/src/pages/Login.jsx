import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    border: 1px solid teal;
    ${mobile({ width: "75%" })}
`;
const Heading = styled.h1`
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 1.5px;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
const Input = styled.input`
    font-size: 16px;
    font-weight: 400;
    min-width: 40%;
    padding: 10px;
    flex: 1;
    margin: 20px 10px 0px 0px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    margin: 20px 0px 0px 0px;
    background-color: teal;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    /* display: flex;
     */

    &:hover {
        background-color: #66b2b2;
    }
`;

const Link = styled.a`
    margin: 20px 0px 0px 0px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;
const LinkForget = styled.a`
    color: ${(props) => props.color};
    margin: 20px 0px 0px 0px;
    font-size: 16px;
    cursor: pointer;
`;
const Checkbox = styled.input.attrs({ type: "checkbox" })`
    width: 18px;
    height: 18px;
    margin-right: 10px;
`;

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    console.log({ formData });
    const loginUser = () => {
        // login api call
        // on success
        navigate("/");
    };
    return (
        <Container>
            <Wrapper>
                <Heading>Login</Heading>
                <Form>
                    <Input
                        placeholder='username'
                        onChange={(event) => {
                            const value = event.target.value;
                            setFormData({
                                ...formData,
                                username: value,
                            });
                        }}></Input>
                    <Input
                        placeholder='password'
                        onChange={(event) => {
                            const value = event.target.value;
                            setFormData({
                                ...formData,
                                password: value,
                            });
                        }}></Input>
                    <Link>
                        <Checkbox />
                        REMEMBER ME!
                    </Link>
                    <Link>CREATE NEW ACCOUNT</Link>
                    <Button onClick={loginUser}>LOGIN</Button>
                    <LinkForget color='teal'>FORGET PASSWORD</LinkForget>
                </Form>
            </Wrapper>
        </Container>
    );
};
