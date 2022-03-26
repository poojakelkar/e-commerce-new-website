import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { slideItem } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container= styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
`;

const Wrap = styled.div`
    height: 100vh;
    display: flex;
    transition: all 1.5s ease;
    transform : translateX(${(props) => props.slider * -100}vw);
`
const Sliding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    background-color: #${(props) => props.bg};
`
const ImgSliding = styled.div`
    height: 100%;
    flex:1 
`
const Image = styled.img`
    margin: 60px 90px;
    height: 80%;
    width: 60%;
`
const TextSliding = styled.div`
    flex:1;
`

const Heading = styled.h1`
    font-size: 70px;
`
const ParaText= styled.p`
    margin: 40px 0px; 
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 2.5px;
    padding-right: 80px;
`
const ShopNowBtn = styled.button`
    padding: 10px;
    background-color: teal;
    cursor: pointer;
    color: white;
    font-weight: 500;
    font-size: 18px;
    border: none;

    &:hover{
        background-color: #66B2B2;
    }
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
    left: ${(props) => props.direction==="left" && "10px"};
    right: ${(props) => props.direction ==="right" && "10px"};
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`

export const Slide = () => {
    const [slider, setSlider] = useState(0);
    const arrowClick = (direction) =>{
        if(direction === "left"){
            setSlider(slider > 0 ? slider-1 : 2);
        }
        else{
            setSlider(slider < 2 ? slider +1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=> arrowClick("left")}>
            <ArrowLeftOutlined>
            </ArrowLeftOutlined>
        </Arrow>
        <Wrap slider={slider}>
            {slideItem.map(item=>(
                <Sliding bg={item.bg} key={item.id}>
                <ImgSliding>
                    <Image src={item.img}></Image>
                </ImgSliding>
                <TextSliding>
                    <Heading>{item.heading}</Heading>
                    <ParaText>{item.para}</ParaText>
                    <ShopNowBtn>SHOP NOW</ShopNowBtn>
                </TextSliding>
            </Sliding>
            ))}   
        </Wrap>
        <Arrow direction="right" onClick={()=> arrowClick("right")}>
            <ArrowRightOutlined>
            </ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}
