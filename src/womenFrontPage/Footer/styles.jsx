import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "30vh" })}
`;
export const Heading = styled.h1`
  font-size: 3rem;
  margin: 1rem;
  ${mobile({ textAlign: "center", fontSize: "1rem" })}
`;
export const Text = styled.div`
  font-size: 1.5rem;
  margin: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
  ${mobile({ textAlign: "center", fontSize: "0.7rem", margin: "0rem" })}
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 3rem;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  width: 50%;
  height: 3rem;
  margin: 0rem 0.5rem;
  ${mobile({ width: "90%", height: "1.5rem" })}
`;
export const Button = styled.button`
  background-color: teal;
  color: white;
  border: none;
  padding: 0.7rem;
  ${mobile({ padding: "0rem" })}
  &:hover {
    background-color: #66b2b2;
  }
`;
