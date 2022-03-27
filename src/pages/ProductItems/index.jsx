import axios from "axios";
import { useEffect, useState } from "react";
import { Announce } from "../../womenFrontPage/Announce";
import { Footer } from "../../womenFrontPage/Footer";
import { LastFooter } from "../../womenFrontPage/LastFooter";
import { Nav } from "../../womenFrontPage/Nav";
import {
  Button,
  Card,
  Category,
  CategoryName,
  CheckBox,
  CheckBoxItem,
  Clear,
  Container,
  Filter,
  Grid,
  Image,
  ImgInfo,
  ImgTitle,
  Price,
  PriceSlide,
  PriceSlider,
  PriceSliderText,
  ProductImg,
  Radio,
  Radiobtn,
  RadioContainer,
  SideBar,
  SideContainer,
  SlideContainer,
  Title,
} from "./styles";

const ProductItems = () => {
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

export default ProductItems;
