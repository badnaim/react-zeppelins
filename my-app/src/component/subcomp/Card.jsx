import React from 'react'
import "../../styles/card.css"

export default function Card({product}) {
  return (
    <div className='card'>
      <div><img src={product.image}/></div>
      <div>Nov 23 2020</div>
      <div><h2>{product.title}</h2></div>
      <div>{product.description}</div>
      <div id='click'>READ MORE</div>
    </div>
  )
}
