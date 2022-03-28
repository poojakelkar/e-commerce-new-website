import React from "react";
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

const Forget = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>FORGET PASSWORD</Heading>
        <Form>
          <Input placeholder="Email Id"></Input>
          <Input placeholder="New Password"></Input>
          <Input placeholder="Re-Enter Password"></Input>
          <Agree>
            <Checkbox />I am accepting all the terms and condition
          </Agree>
        </Form>
        <Button>Change Password</Button>
      </Wrapper>
    </Container>
  );
};

export default Forget;
