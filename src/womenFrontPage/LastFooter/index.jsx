import {
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  WhatsApp,
} from "@material-ui/icons";
import React from "react";
import {
  CenterFirst,
  CenterSecond,
  Container,
  Email,
  Icon,
  Info,
  Left,
  List,
  ListContent,
  Locate,
  Location,
  Logo,
  Right,
  RightHeading,
  SecondHeading,
  Social,
} from "./styles";

export const LastFooter = () => {
  return (
    <Container>
      <Left>
        <Logo>WOMEN.</Logo>
        <Info>
          Copyright @ [WOMEN & 2022]. Any illegal reproduction of this content
          will result in immediate legal action. Like in the example, your
          YouTube copyright disclaimer can just be the copyright symbol (or “C”
          or “Copyright”).
        </Info>
      </Left>
      <CenterFirst>
        <List>
          <ListContent>Career</ListContent>
          <ListContent>Become a Supplier</ListContent>
          <ListContent>Women Blog</ListContent>
          <ListContent>Terms and Conditions</ListContent>
        </List>
      </CenterFirst>

      <CenterSecond>
        <SecondHeading>Contact Us</SecondHeading>
        <Email>query@women.com</Email>
        <Location>
          <Locate>
            <LocationOn></LocationOn>122 Keshav Road, Mumbai 230532
          </Locate>
        </Location>
        <Location>
          <Locate>
            <Phone />+ 91 123 9999 134
          </Locate>
        </Location>
      </CenterSecond>

      <Right>
        <RightHeading>Reach Out to us!</RightHeading>
        <Social>
          <Icon color="395693">
            <Facebook></Facebook>
          </Icon>
          <Icon color="D72C71">
            <Instagram></Instagram>
          </Icon>
          <Icon color="24CC63">
            <WhatsApp></WhatsApp>
          </Icon>
        </Social>
      </Right>
    </Container>
  );
};
