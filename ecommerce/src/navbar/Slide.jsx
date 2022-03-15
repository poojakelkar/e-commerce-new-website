import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container= styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: coral;
    position: relative;
`;
const Arrow = styled.div`
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
    left: ${props=> props.direction==="left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
`

export const Slide = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined>
            </ArrowLeftOutlined>
        </Arrow>
        <Arrow direction="right">
            <ArrowRightOutlined>
            </ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}
