import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  CreateAc,
  Form,
  Heading,
  Input,
  LinkForget,
  RememberContainer,
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
          <RememberContainer>
            <Checkbox />
            REMEMBER ME!
          </RememberContainer>
          <CreateAc>
            <Link to="/register" style={{ textDecoration: "none" }}>
              CREATE NEW ACCOUNT
            </Link>
          </CreateAc>

          <Button onClick={loginUser}>LOGIN</Button>
          <Link to="/forget-password" style={{ textDecoration: "none" }}>
            <LinkForget color="teal">FORGET PASSWORD</LinkForget>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
