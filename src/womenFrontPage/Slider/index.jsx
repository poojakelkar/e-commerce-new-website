import React, { useContext } from "react";
import { StateContext } from "../../Context";
import {
  Category,
  CheckBox,
  CheckBoxItem,
  Clear,
  Filter,
  FilterSidebar,
  Price,
  PriceSlide,
  PriceSlider,
  PriceSliderText,
  Radio,
  Radiobtn,
  RadioContainer,
  SideBar,
  SlideContainer,
  SortContainer,
  SortHighToLow,
  Sorting,
  SortLowToHigh,
  Title,
} from "./styles";

const Sidebar = () => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <>
      <FilterSidebar>
        <SideBar>
          <Filter>
            <Title>Filter</Title>
            <Clear
              span
              onClick={(e) => dispatch({ type: "CLEAR_ALL_FILTERS" })}
              className="text-sm clear-all"
            >
              Clear
            </Clear>
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
                value={state.sortBy}
                checked={state.sortBy && state.sortBy === "low-to-high"}
                name="sortBy"
                onClick={() =>
                  dispatch({ type: "SET_SORT_TYPE", payload: "low-to-high" })
                }
              />
              Price Low-to-High
            </SortContainer>
            <SortContainer>
              <SortHighToLow
                value={state.sortBy}
                name="sortBy"
                checked={state.sortBy && state.sortBy === "high-to-low"}
                type="radio"
                onClick={() =>
                  dispatch({ type: "SET_SORT_TYPE", payload: "high-to-low" })
                }
              />
              Price High-to-Low
            </SortContainer>
          </Sorting>

          <Category>
            <Title>Category</Title>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes(
                  "Women-Wear"
                )}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Women-Wear" })
                }
              />
              Women Wear
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes("Shoes")}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Shoes" })
                }
              />
              Shoes
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes("Bag")}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Bag" })
                }
              />
              Bag
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes("Makeup")}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Makeup" })
                }
              />
              Makeup
            </CheckBoxItem>
            <CheckBoxItem>
              <CheckBox
                checked={state.sortByFilters.sortByCategory.includes("Hygiene")}
                onChange={(e) =>
                  dispatch({ type: "SET_CATEGORY", payload: "Hygiene" })
                }
              />
              Hygiene
            </CheckBoxItem>
          </Category>

          <Radiobtn>
            <Title>Rating</Title>
            <RadioContainer>
              <Radio
                value={state.rating}
                checked={state.rating && state.rating === 4}
                type="radio"
                onClick={(e) => dispatch({ type: "SET_RATING", payload: 4 })}
              />{" "}
              4 Star and above
            </RadioContainer>
            <RadioContainer>
              <Radio
                value={state.rating}
                checked={state.rating && state.rating === 3}
                type="radio"
                onClick={(e) => dispatch({ type: "SET_RATING", payload: 3 })}
              />{" "}
              3 Star and above
            </RadioContainer>
            <RadioContainer>
              <Radio
                value={state.rating}
                checked={state.rating && state.rating === 2}
                type="radio"
                onClick={(e) => dispatch({ type: "SET_RATING", payload: 2 })}
              />{" "}
              2 Star and above
            </RadioContainer>
            <RadioContainer>
              <Radio
                value={state.rating}
                checked={state.rating && state.rating === 1}
                type="radio"
                onClick={(e) => dispatch({ type: "SET_RATING", payload: 1 })}
              />{" "}
              1 Star and above
            </RadioContainer>
          </Radiobtn>
        </SideBar>
      </FilterSidebar>
    </>
  );
};

export default Sidebar;
