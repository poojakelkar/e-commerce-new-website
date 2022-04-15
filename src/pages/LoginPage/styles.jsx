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
`;
export const Wrapper = styled.div`
  width: 30%;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid teal;
  ${mobile({ width: "90%", height: "45%", padding: "0.5rem" })}
`;
export const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1.5px;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export const Input = styled.input`
  font-size: 1.3rem;
  font-weight: 400;
  min-width: 40%;
  padding: 0.6rem;
  flex: 1;
  margin: 1.5rem 0.8rem 0rem 0rem;
  ${mobile({
    width: "10rem",
    padding: "0.7rem",
    fontSize: "0.8rem",
  })}
`;

export const Button = styled.button`
  width: 40%;
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  ${mobile({ padding: "0.3rem", fontSize: "0.8rem", margin: "0.3rem" })}

  &:hover {
    background-color: #66b2b2;
  }
`;

export const RememberContainer = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ fontSize: "0.6rem", margin: "0rem" })}
`;

export const CreateAc = styled.span`
  display: flex;
  align-items: flex-end;
  margin-top: 1.5rem;
  ${mobile({ fontSize: "0.6rem", margin: "0.3rem" })}
`;

export const LinkForget = styled.a`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  ${mobile({ fontSize: "0.6rem", margin: "0.6rem" })}
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.3rem;
  height: 1.6rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  ${mobile({ width: "0.8rem", margin: "0.2rem" })}
`;
