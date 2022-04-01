import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin-left: 1rem;
`;
export const Logo = styled.h1``;
export const Info = styled.p`
  margin: 1rem 0rem;
  letter-spacing: 1.5px;
`;
export const CenterFirst = styled.div`
  flex: 1;
  padding: 1.5rem;
  ${mobile({ display: "none" })}
`;
export const List = styled.ul`
  margin-top: 0.6rem;
`;
export const ListContent = styled.li`
  font-size: 1.3rem;
  color: gray;
  font-weight: 500;
  letter-spacing: 1.5px;
  list-style: none;
  padding-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
export const CenterSecond = styled.div`
  flex: 1;
  padding: 1rem;
  ${mobile({ backgroundColor: "lightgray", fontSize: "0.5rem" })}
`;

export const SecondHeading = styled.h1``;

export const Email = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem;
  letter-spacing: 1.5px;
  color: grey;
  font-weight: 500;
  cursor: pointer;
  ${mobile({ fontSize: "1rem" })}
  &:hover {
    color: black;
  }
`;
export const Location = styled.p`
  padding: 0.5rem 0rem; ;
`;
export const Locate = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const Right = styled.div`
  flex: 1;
  padding: 1.4rem;
`;
export const RightHeading = styled.h1``;

export const Social = styled.div`
  display: flex;
`;
export const Icon = styled.div`
  padding: 0.5rem;
  margin: 1rem;
  width: 3.5rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
