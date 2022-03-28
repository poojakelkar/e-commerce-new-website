import React from "react";

import { womenItem } from "../../data";
import { WomenCatItem } from "../WomenCatItem";
import { Container } from "./styles";

export const Category = () => {
  return (
    <Container>
      {womenItem.map((item) => (
        <WomenCatItem item={item} key={item.id}></WomenCatItem>
      ))}
    </Container>
  );
};
