import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Announce } from "../../womenFrontPage/Announce/index";
import { Footer } from "../../womenFrontPage/Footer/index";
import { LastFooter } from "../../womenFrontPage/LastFooter/index";
import { Nav } from "../../womenFrontPage/Nav/index";
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
  Sorting,
  SortHighToLow,
  SortLowToHigh,
  SortContainer,
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

  const [{ sortBy }, dispatch] = useReducer(
    function reducer(state, action) {
      switch (action.type) {
        case "SORT":
          return {
            ...state,
            sortBy: action.payload,
          };
        default:
          return state;
      }
    },
    {
      sortBy: null,
    }
  );

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  }

  getSortedData(products, sortBy);

  //const [check, setcheck] = useReducer("");
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

          <Sorting>
            <Title>Sort</Title>
            <SortContainer>
              <SortLowToHigh
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              />
              Price Low-to-High
            </SortContainer>
            <SortContainer>
              <SortHighToLow
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              />
              Price High-to-Low
            </SortContainer>
          </Sorting>

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
                  <Link to="/product/:productId">
                    <Image src={item.image} />
                  </Link>
                  <ImgInfo>
                    <ImgTitle>{item?.title}</ImgTitle>
                    <CategoryName>Rs.{item?.price}</CategoryName>
                  </ImgInfo>
                  <Link to="/cart">
                    <Button>ADD TO CARD</Button>
                  </Link>
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
