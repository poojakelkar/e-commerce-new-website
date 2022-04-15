import { Send } from "@material-ui/icons";
import React from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  InputContainer,
  Text,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Heading>Feedback</Heading>
      <Text>Share your valuable feedback with us!</Text>
      <InputContainer>
        <Input placeholder="Type Feedback..."></Input>
        <Button>
          <Send></Send>
        </Button>
      </InputContainer>
    </Container>
  );
};
