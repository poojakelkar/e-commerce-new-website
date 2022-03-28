import React from "react";

import { product } from "../../data";
import { Products } from "../Products/index";
import { Container, Head } from "./styles";

const WomenProducts = () => {
  return (
    <div>
      <Head>WOMEN CATEGORY</Head>
      <Container>
        {product.map((item) => (
          <Products item={item} key={item.id}></Products>
        ))}
      </Container>
    </div>
  );
};

export default WomenProducts;
