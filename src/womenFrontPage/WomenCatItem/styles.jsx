import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 8px;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
export const TextHead = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #66b2b2;
  }
`;
