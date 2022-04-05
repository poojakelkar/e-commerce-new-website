import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 2rem;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  ${mobile({ fontSize: "0.6rem" })}
`;
