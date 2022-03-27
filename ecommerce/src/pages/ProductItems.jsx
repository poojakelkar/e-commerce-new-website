import styled from "styled-components";
import { Announce } from "../womenFrontPage/Announce";
import { Footer } from "../womenFrontPage/Footer";
import { LastFooter } from "../womenFrontPage/LastFooter";
import { Nav } from "../womenFrontPage/Nav";
//import { Products } from "../womenFrontPage/Products"
import { WomenProducts } from "../womenFrontPage/WomenProducts";
import { mobile } from "../responsive";

const Container = styled.div``;

const SideBar = styled.div`
    background-color: red;
    width: 20vw;
    height: 130vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0px 20px;
    padding: 10px 0px 0px 0px;
`;
const Filter = styled.div`
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`;
const Title = styled.h1`
    font-size: 24px;
`;
const Clear = styled.h5`
    font-size: 20px;
    cursor: pointer;
`;
const PriceSlider = styled.div`
    margin: 40px 0px;
    padding: 10px;
    border: 1px solid #888;
`;
const SlideContainer = styled.div`
    color: #888;
`;
const PriceSliderText = styled.div`
    display: flex;
    gap: 10px;
    font-size: small;
`;
const Price = styled.p`
    font-weight: bold;
    padding: 10px 40px 0px 0px;
`;
const PriceSlide = styled.input.attrs({
    type: "range",
    min: "1",
    max: "200",
    value: "20",
})`
    width: 200px;
    border: 1px solid #888;
`;
const Category = styled.div``;
const CheckBoxItem = styled.div`
    font-size: 20px;
    padding-bottom: 10px;
`;
const CheckBox = styled.input.attrs({ type: "checkbox" })`
    width: 20px;
    height: 20px;
    margin-top: 20px;
    cursor: pointer;
`;
const RadioContainer = styled.div`
    margin-top: 20px;
    padding-bottom: 10px;
    font-size: 20px;
`;
const Radiobtn = styled.div`
    margin-top: 20px;
`;
const Radio = styled.input.attrs({ type: "radio" })``;

const SideContainer = styled.div`
    background-color: red;
`

export const ProductItems = () => {
    return (
        <Container>
            <Announce></Announce>
            <Nav></Nav>
            <SideBar>
                <Filter>
                    <Title>Filter</Title>
                    <Clear>Clear</Clear>
                </Filter>
                <PriceSlider>
                    <Title>Price</Title>
                    <SlideContainer>
                        <PriceSliderText>
                            <Price>50</Price>
                            <Price>200</Price>
                            <Price>500</Price>
                        </PriceSliderText>
                        <PriceSlide></PriceSlide>
                    </SlideContainer>
                </PriceSlider>

                <Category>
                    <Title>Category</Title>
                    <CheckBoxItem>
                        <CheckBox /> Knee Length
                    </CheckBoxItem>
                    <CheckBoxItem>
                        <CheckBox /> Ankle Length
                    </CheckBoxItem>
                    <CheckBoxItem>
                        <CheckBox /> Midi Length
                    </CheckBoxItem>
                    <CheckBoxItem>
                        <CheckBox /> Maxi Length
                    </CheckBoxItem>
                </Category>

                <Radiobtn>
                    <Title>Rating</Title>
                    <RadioContainer>
                        <Radio
                            type='radio'
                            id='star1'
                            value='star1'
                            name='stars'
                        />{" "}
                        4 Star and above
                    </RadioContainer>
                    <RadioContainer>
                        <Radio
                            type='radio'
                            id='star2'
                            value='star2'
                            name='stars'
                        />{" "}
                        3 Star and above
                    </RadioContainer>
                    <RadioContainer>
                        <Radio
                            type='radio'
                            id='star3'
                            value='star3'
                            name='stars'
                        />{" "}
                        2 Star and above
                    </RadioContainer>
                    <RadioContainer>
                        <Radio
                            type='radio'
                            id='star4'
                            value='star4'
                            name='stars'
                        />{" "}
                        1 Star and above
                    </RadioContainer>
                </Radiobtn>
            </SideBar>

            <SideContainer>
                
            </SideContainer>
            <Footer></Footer>
            <LastFooter></LastFooter>
        </Container>
    );
};
