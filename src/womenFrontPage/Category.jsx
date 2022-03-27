import React from 'react'
import styled from 'styled-components';
import { womenItem } from '../data';
import { WomenCatItem } from './WomenCatItem';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({flexDirection: 'column', padding:'0'})}
`
export const Category = () => {
    return (
        <Container>
            {womenItem.map(item=>(
                <WomenCatItem item={item} key={item.id}></WomenCatItem>
            ))}
        </Container>
      )
}

