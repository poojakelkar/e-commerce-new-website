import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
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
  margin-bottom: 1.5rem;
  ${mobile({ fontSize: "1rem" })}
`;
export const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: teal;
  color: white;
  border: none;
  cursor: pointer;
  ${mobile({ fontSize: "0.8rem", padding: "0.5rem" })}

  &:hover {
    background-color: #66b2b2;
  }
`;
