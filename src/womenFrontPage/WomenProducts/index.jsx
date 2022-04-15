import React from "react";
import { Products } from "../Products/index";
import { Container, Head } from "./styles";

const WomenProducts = () => {
  return (
    <div>
      <Head>WOMEN CATEGORY</Head>
      <Container>
        <Products></Products>
      </Container>
    </div>
  );
};

export default WomenProducts;
