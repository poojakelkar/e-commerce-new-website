import styled from "styled-components";

export const Container = styled.div``;

export const Grid = styled.div`
  overflow: hidden;
  display: grid;
  height: 130vh;
  color: white;
  grid-template-areas: "Sidebar SideContainer SideContainer SideContainer";
  grid-gap: 10px;
`;
export const SideBar = styled.div`
  color: black;
  width: 20vw;
  height: 130vh;
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
  cursor: pointer;
`;
export const PriceSlider = styled.div`
  margin: 40px 0px;
  padding: 10px;
  border: 1px solid #888;
`;
export const SlideContainer = styled.div`
  color: #888;
`;
export const PriceSliderText = styled.div`
  display: flex;
  gap: 10px;
  font-size: small;
`;
export const Price = styled.p`
  font-weight: bold;
  padding: 10px 40px 0px 0px;
`;
export const PriceSlide = styled.input.attrs({
  type: "range",
  min: "1",
  max: "200",
  value: "20",
})`
  width: 200px;
  border: 1px solid #888;
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
  margin: 10px;
`;
export const ProductImg = styled.div`
  width: 250px;
  height: 400px;
  background-color: white;
`;
export const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  border: 1px solid black;
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
