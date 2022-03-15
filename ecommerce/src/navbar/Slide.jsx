import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import myImage from './dress.png'

const Container= styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
`;

const Wrap = styled.div`
    height: 100vh;
`
const Sliding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
`
const ImgSliding = styled.div`
    height: 100%;
    flex:1 
`
const Image = styled.img`
    height: 100%;
`

const TextSliding = styled.div`
    flex:1
`

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
    cursor: pointer;
    opacity: 0.5;
`

export const Slide = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined>
            </ArrowLeftOutlined>
        </Arrow>
        <Wrap>
            <Sliding>
                <ImgSliding>
                    <Image src={myImage}></Image>
                </ImgSliding>
                <TextSliding>
                </TextSliding>
            </Sliding>
        </Wrap>
        <Arrow direction="right">
            <ArrowRightOutlined>
            </ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}
