import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Announce } from "../womenFrontPage/Announce";
import { Footer } from "../womenFrontPage/Footer";
import { LastFooter } from "../womenFrontPage/LastFooter";
import { Nav } from "../womenFrontPage/Nav";
//import { Products } from "../womenFrontPage/Products"
import { WomenProducts } from "../womenFrontPage/WomenProducts";
import { mobile } from "../responsive";

const Container = styled.div``;

const Grid = styled.div`
  overflow: hidden;
  display: grid;
  height: 130vh;
  color: white;
  grid-template-areas: "Sidebar SideContainer SideContainer SideContainer";
  grid-gap: 10px;
`;
const SideBar = styled.div`
  color: black;
  width: 20vw;
  height: 130vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px 0px 0px 20px;
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
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 10px;
`;
const Card = styled.div`
  margin: 10px;
`;
const ProductImg = styled.div`
  width: 250px;
  height: 400px;
  background-color: white;
`;
const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  border: 1px solid black;
`;
const ImgInfo = styled.div`
  color: black;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
const CategoryName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
const Button = styled.button`
  width: 250px;
  padding: 10px 20px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    background-color: #66b2b2;
  }
`;

export const ProductItems = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/categories",
    }).then((res) => {
      if (res.status === 200) {
        setCategories(res.data?.categories);
        console.log(res.data, "axios agaya");
      }
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/products",
    }).then((res) => {
      if (res.status === 200) {
        setProducts(res.data?.products);
        console.log(res.data, "axios agaya");
      }
    });
  }, []);

  // useStates
  // useEffects
  // handelers
  // functions

  return (
    <Container>
      <Announce></Announce>
      <Nav></Nav>
      <Grid>
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
            {!!categories?.length &&
              categories.map((category, index) => (
                <CheckBoxItem key={category._id}>
                  <CheckBox />
                  {category?.categoryName}
                </CheckBoxItem>
              ))}
          </Category>

          <Radiobtn>
            <Title>Rating</Title>
            <RadioContainer>
              <Radio type="radio" id="star1" value="star1" name="stars" /> 4
              Star and above
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="star2" value="star2" name="stars" /> 3
              Star and above
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="star3" value="star3" name="stars" /> 2
              Star and above
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="star4" value="star4" name="stars" /> 1
              Star and above
            </RadioContainer>
          </Radiobtn>
        </SideBar>

        <SideContainer>
          {!!products?.length &&
            products.map((item) => (
              <Card>
                <ProductImg key={item._id}>
                  <Image src={item.image} />
                  <ImgInfo>
                    <ImgTitle>{item?.title}</ImgTitle>
                    <CategoryName>Rs.{item?.price}</CategoryName>
                  </ImgInfo>
                  <Button>ADD TO CARD</Button>
                </ProductImg>
              </Card>
            ))}
        </SideContainer>
      </Grid>
      <Footer></Footer>
      <LastFooter></LastFooter>
    </Container>
  );
};
