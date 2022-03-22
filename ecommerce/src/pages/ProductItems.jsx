import styled from "styled-components"
import { Announce } from "../womenFrontPage/Announce"
import { Footer } from "../womenFrontPage/Footer"
import { LastFooter } from "../womenFrontPage/LastFooter"
import { Nav } from "../womenFrontPage/Nav"
//import { Products } from "../womenFrontPage/Products"
import { WomenProducts } from "../womenFrontPage/WomenProducts"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Heading = styled.h1`
    margin: 20px;
`
const Filtering = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width: '0px 20px', display:"flex", flexDirection:'column'})}
`
const FilterHeading = styled.span`
    font-size: 18px;
    font-weight: 600;
    ${mobile({marginRight: '0px'})}
`
const ListSelect = styled.select`
    padding: 5px;
    width: 10vw;
    border: 1px solid black;
    font-size: 16px;
    letter-spacing: 1.5px;
    ${mobile({margin: '10px 0px', width: '30vw', fontSize: '12px'})}
`
const ListOption = styled.option`
    
`

export const ProductItems = () => {
  return (
    <Container>
        <Announce></Announce>
        <Nav></Nav>

        <Heading>WOMEN DRESSES</Heading>
        <Filtering>
            <Filter><FilterHeading>Filter: </FilterHeading>
                <ListSelect>
                    <ListOption>Kneee Length</ListOption>
                    <ListOption>Ankle Length</ListOption>
                    <ListOption>Midi Length </ListOption>
                    <ListOption>Maxi Length</ListOption>
                </ListSelect>
            </Filter>
      
            <Filter><FilterHeading>Sort By: </FilterHeading>
                <ListSelect>
                    <ListOption>Popularity</ListOption>
                    <ListOption>New Arrivals</ListOption>
                    <ListOption>Low-to-High</ListOption>
                    <ListOption>High-to-ow</ListOption>
                </ListSelect>
            </Filter>
        </Filtering>

        <WomenProducts></WomenProducts>
        <Footer></Footer>
        <LastFooter></LastFooter>
    </Container>
  )
}
