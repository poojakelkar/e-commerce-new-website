import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slider * -100}vw);
`;
export const Sliding = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
export const ImgSliding = styled.div`
  height: 100%;
  flex: 1;
`;
export const Image = styled.img`
  margin: 60px 90px;
  height: 80%;
  width: 60%;
`;
export const TextSliding = styled.div`
  flex: 1;
`;

export const Heading = styled.h1`
  font-size: 70px;
`;
export const ParaText = styled.p`
  margin: 40px 0px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 2.5px;
  padding-right: 80px;
`;
export const ShopNowBtn = styled.button`
  padding: 10px;
  background-color: teal;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 18px;
  border: none;

  &:hover {
    background-color: #66b2b2;
  }
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;
