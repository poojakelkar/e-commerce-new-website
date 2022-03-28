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
  padding: 20px;
  margin-left: 10px;
`;
export const Logo = styled.h1``;
export const Info = styled.p`
  margin: 10px 0px;
  letter-spacing: 1.5px;
`;
export const CenterFirst = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
export const List = styled.ul`
  margin-top: 10px;
`;
export const ListContent = styled.li`
  font-size: 20px;
  color: gray;
  font-weight: 500;
  letter-spacing: 1.5px;
  list-style: none;
  padding-bottom: 20px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
export const CenterSecond = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "lightgray" })}
`;

export const SecondHeading = styled.h1``;

export const Email = styled.p`
  font-size: 20px;
  margin: 10px;
  letter-spacing: 1.5px;
  color: grey;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
export const Location = styled.p`
  padding: 10px 0px; ;
`;
export const Locate = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
export const RightHeading = styled.h1``;

export const Social = styled.div`
  display: flex;
`;
export const Icon = styled.div`
  padding: 5px;
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;
