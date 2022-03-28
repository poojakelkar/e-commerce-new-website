import styled from "styled-components";
import { mobile } from "../responsive";

export const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Heading = styled.h1`
  font-size: 40px;
  margin: 10px;
  ${mobile({ textAlign: "center" })}
`;
export const Text = styled.div`
  font-size: 20px;
  margin: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  ${mobile({ textAlign: "center" })}
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 40px;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  width: 50%;
  height: 40px;
  margin: 0px 8px;
  ${mobile({ width: "90%" })}
`;
export const Button = styled.button`
  background-color: teal;
  color: white;
  border: none;
  padding: 8px;

  &:hover {
    background-color: #66b2b2;
  }
`;
