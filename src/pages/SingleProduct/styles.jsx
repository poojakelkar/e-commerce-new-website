import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  padding: 40px;
  ${mobile({ padding: "20px", flexDirection: "column" })}
`;
export const ProductImage = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
export const InfoContainer = styled.div`
  flex: 1;
  margin: 0px 20px;
`;
export const Title = styled.h1`
  font-weight: 400;
  letter-spacing: 1.5px;
`;
export const Info = styled.p`
  width: 90%;
  margin: 20px 0px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1.5px;
`;
export const Price = styled.p`
  font-size: 40px;
`;
export const Filter = styled.div`
  display: flex;
  margin: 20px 0px;
`;
export const ColorFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
`;
export const ColorTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.5px;
  margin: 10px 0px;
`;
export const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
export const Size = styled.select`
  padding: 5px;
  margin: 0px 10px;
`;
export const ProductSize = styled.option`
  font-size: 16px;
`;
export const AddContainer = styled.div`
  display: flex;
  margin: 40px 0px;
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
`;
export const Sub = styled.span`
  margin: 0px 20px 0px 0px;
`;
export const Amount = styled.span`
  margin: 0px 20px 0px 0px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Add = styled.span``;
export const AddToCart = styled.button`
  margin-left: 30px;
  background-color: teal;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border: none;
  padding: 10px;

  &:hover {
    background-color: #66b2b2;
  }
`;
