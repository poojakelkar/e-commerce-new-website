import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: white;
  border: 1px solid teal;
  ${mobile({ width: "75%", height: "100%", padding: "1.5rem" })}
`;
export const Heading = styled.h1`
  font-size: 1.7rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
  ${mobile({ fontSize: "0.8rem" })}
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  font-size: 1.3rem;
  font-weight: 400;
  min-width: 40%;
  padding: 0.5rem 0.5rem;
  flex: 1;
  margin: 1.5rem;
  ${mobile({
    fontSize: "0.8rem",
    padding: "0.5rem",
    margin: "1rem",
    width: "1rem",
  })}
`;
export const Agree = styled.span`
  font-size: 1.3rem;
  margin: 10px 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "0.6rem" })}
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  padding: 1rem 2rem;
  margin: 0.5rem 1.5rem;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;
  ${mobile({ padding: "0.3rem", fontSize: "0.8rem", margin: "0.4rem" })}

  &:hover {
    background-color: #66b2b2;
  }
`;
export const AlreadyAc = styled.span`
  display: flex;
  align-items: flex-end;
  color: teal;
  margin-right: 1rem;
  font-size: 1.3rem;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.8rem;
`;
