import React from "react";
import { Link } from "react-router-dom";
import {
  Agree,
  Button,
  Checkbox,
  Container,
  Form,
  Heading,
  Input,
  Wrapper,
} from "./styles";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>CREATE AN ACCOUNT</Heading>

        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Username"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Agree>
            <Checkbox />I am accepting all the terms and condition
          </Agree>
        </Form>
        <Link to="/Login">
          <Button>Sign Up</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
