import React from 'react'
import Carousel from './Carousel'
import { cardText } from './card-text'
import CardWithText from './CardWithText'

export default function Homepage() {
  return (
    <>
    <Carousel />
        <div className='text-center m-5'>Homepage</div>
        <div className='flex gap-3 '>
      {
        cardText.map((card, index) => (
          <CardWithText key={index} {...card} />
        ))
      }
</div>
    </>
  )
}


