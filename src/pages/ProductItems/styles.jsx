import styled from "styled-components";

export const Container = styled.div``;

export const Grid = styled.div`
  overflow: hidden;
  display: grid;
  height: 150vh;
  color: white;
  grid-template-areas: "Sidebar SideContainer SideContainer SideContainer";
  grid-gap: 10px;
`;
export const SideBar = styled.div`
  color: black;
  width: 20vw;
  height: 150vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px 0px 0px 20px;
  padding: 10px 0px 0px 0px;
`;
export const Filter = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
export const Title = styled.h1`
  font-size: 24px;
`;
export const Clear = styled.h5`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
`;
export const PriceSlider = styled.div`
  margin: 20px 0px;
  padding: 10px;
  border: 1px solid #888;
`;
export const SlideContainer = styled.div`
  color: #888;
`;
export const PriceSliderText = styled.div`
  display: flex;
  font-size: small;
`;
export const Price = styled.p`
  font-weight: bold;
  padding-top: 10px;
  margin-right: 70px;
`;
export const PriceSlide = styled.input.attrs({
  type: "range",
  min: "1",
  max: "100",
  value: "10",
})`
  width: 200px;
  border: 1px solid #888;
`;

export const Sorting = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 20px;
`;
export const SortContainer = styled.div`
  margin-top: 20px;
`;
export const SortLowToHigh = styled.input.attrs({ type: "radio" })`
  margin-right: 5px;
`;
export const SortHighToLow = styled.input.attrs({ type: "radio" })`
  margin-right: 5px;
`;
export const Category = styled.div``;
export const CheckBoxItem = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  cursor: pointer;
  margin-right: 5px;
`;
export const RadioContainer = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  font-size: 20px;
`;
export const Radiobtn = styled.div`
  margin-top: 20px;
`;
export const Radio = styled.input.attrs({ type: "radio" })``;

export const SideContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
`;
export const Card = styled.div`
  width: 250px;
  height: 57vh;
  margin: 10px;
`;
export const ProductImg = styled.div`
  width: 100%;
  background-color: white;
`;
export const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
`;
export const ImgInfo = styled.div`
  color: black;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
export const CategoryName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
export const Button = styled.button`
  width: 250px;
  padding: 10px 20px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  /* display: flex;
     */

  &:hover {
    background-color: #66b2b2;
  }
`;
