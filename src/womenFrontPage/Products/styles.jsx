import styled from "styled-components";
import { mobile } from "../../responsive";

export const Heading = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease;
`;
export const Container = styled.div`
  flex: 1;
  margin: 0px 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Heading} {
    opacity: 1;
  }
`;
export const Image = styled.img`
  height: 70%;
  width: 100%;
  object-fit: cover;
`;

export const Icon = styled.div`
  margin: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: all 1.5s ease;

  &:hover {
    background-color: teal;
    transform: scale(1.1);
    color: white;
  }
`;
