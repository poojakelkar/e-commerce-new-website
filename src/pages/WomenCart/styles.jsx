import { mobile } from "../../responsive";
import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const ShoppingButton = styled.button`
  padding: 20px;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "teal" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "20px" })}
`;

export const TopHeading = styled.div`
  ${mobile({ display: "none" })}
`;
export const TopText = styled.span`
  cursor: pointer;
  margin: 0px 20px;
  text-align: center;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const Text = styled.div`
  flex: 3;
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
  object-fit: cover;
`;
export const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Name = styled.span``;
export const Id = styled.span``;
export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const Size = styled.span``;

export const Price = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  ${mobile({ margin: "5px 15px" })}
`;
export const Add = styled.div``;
export const Amount = styled.div`
  //font-size: 24px;
  margin: 10px;
  font-weight: 500;
`;
export const Remove = styled.div``;
export const FinalAmount = styled.div`
  font-size: 22px;
  font-weight: 500;
  ${mobile({ margin: "20px" })}
`;
export const Summary = styled.div`
  flex: 1;
  border: 1px solid teal;
  height: 45vh;
  border-radius: 10px;
  padding: 20px;
`;
export const SummaryHeading = styled.h1`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
`;
export const SummaryProduct = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  letter-spacing: 1.5px;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "22px"};
`;
export const SummaryText = styled.span``;
export const SummaryPrice = styled.span``;

export const Checkout = styled.button`
  padding: 10px;
  width: 100%;
  background-color: teal;
  color: white;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.5px;
  border: none;
`;
