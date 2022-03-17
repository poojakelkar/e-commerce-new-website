import React from 'react'
import { Announce } from '../womenFrontPage/Announce'
import { Category } from '../womenFrontPage/Category'
import { Nav } from '../womenFrontPage/Nav'
import { Slide } from '../womenFrontPage/Slide'
import { WomenProducts } from '../womenFrontPage/WomenProducts'


export default function Home() {
  return (
    <div>
         <Announce></Announce>
        <Nav></Nav>
        <Slide></Slide>
        <Category></Category>
        <WomenProducts></WomenProducts>
    </div>
  )
}
