import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  Form,
  Heading,
  Input,
  LinkForget,
  Wrapper,
} from "./styles";

const Login = () => {
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
            placeholder="username"
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                username: value,
              });
            }}
          ></Input>
          <Input
            placeholder="password"
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                password: value,
              });
            }}
          ></Input>
          <Link>
            <Checkbox />
            REMEMBER ME!
          </Link>
          <Link>CREATE NEW ACCOUNT</Link>
          <Button onClick={loginUser}>LOGIN</Button>
          <LinkForget color="teal">FORGET PASSWORD</LinkForget>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
