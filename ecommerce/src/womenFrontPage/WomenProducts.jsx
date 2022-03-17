import React from 'react'
import styled from 'styled-components'
import { product } from '../pages/data'
import { Products } from './Products'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const WomenProducts = () => {
  return (
    <Container>
        
        {product.map(item =>(
            <Products item={item} key={item.id}></Products>
        ))}
    </Container>
  )
}
