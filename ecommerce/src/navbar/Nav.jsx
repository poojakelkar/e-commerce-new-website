import React from 'react';
import styled from 'styled-components';
import {Search} from '@material-ui/icons'


const Container= styled.div`
    height: 60px;
`
const NavComponent = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left  =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Center  =styled.div`
    flex: 1;
`
const Right  =styled.div`
    flex: 1;
`

export const Nav = () => {
  return (
    <Container>
         <NavComponent>
            <Left>
                <Lang>EN</Lang>
                <SearchContainer>
                    input
                    <Search></Search>
                </SearchContainer>
            </Left>
            <Center>center</Center>
            <Right>right</Right>
         </NavComponent>
    </Container>
  )
}
