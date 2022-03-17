import React from 'react'
import styled from 'styled-components';
import { womenItem } from '../pages/data';
import { WomenCatItem } from './WomenCatItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
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

