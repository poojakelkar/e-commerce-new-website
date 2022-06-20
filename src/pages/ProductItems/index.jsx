import { useContext, useEffect, useRef } from "react";
import {
  ProductContainer,
  ProductDisplayContainer,
  ProductPageContainer,
  TopContainer,
} from "./styles";
import ProductCard from "../../womenFrontPage/ProductCard/index";
import Sidebar from "../../womenFrontPage/Slider/index";
import {
  getFilteredData,
  getPriceRangeFilteredData,
  getRatingSortedData,
  getSortedData,
} from "../../filteredFunction";
import React from "react";
import { StateContext } from "../../Context";
import { Nav } from "../../womenFrontPage/Nav";
import { Announce } from "../../womenFrontPage/Announce";
import { Footer } from "../../womenFrontPage/Footer";
import { LastFooter } from "../../womenFrontPage/LastFooter";

const ProductItems = () => {
  const topContainer = useRef();
  const { state, dispatch } = useContext(StateContext);
  const sortedData = getSortedData(state.products, state.sortBy);
  const priceRangeFilteredData = getPriceRangeFilteredData(
    sortedData,
    50,
    state?.priceRange
  );
  const ratingSortedData = getRatingSortedData(
    priceRangeFilteredData,
    state.rating
  );
  const filteredData = getFilteredData(ratingSortedData, state, dispatch);
  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <>
      <TopContainer ref={topContainer} />
      <Announce />
      <Nav />
      <ProductPageContainer>
        <Sidebar />
        <ProductDisplayContainer>
          {filteredData.length === 0 ? (
            <>
              <h2 class="sub-heading">No products found!</h2>
            </>
          ) : (
            <>
              <ProductContainer>
                {filteredData.map((item) => (
                  <ProductCard item={item} />
                ))}
              </ProductContainer>
            </>
          )}
        </ProductDisplayContainer>
      </ProductPageContainer>
      <Footer />
      <LastFooter />
    </>
  );
};

export default ProductItems;
