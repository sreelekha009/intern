import React from 'react'
import image from './tmilk.jpg'
import cow from './cmilk.jpg'


const Milk = () => {
  return (
    <div>
      <h1>Milk</h1>
      <img src={image}></img>
      <img src={cow}></img>
    </div>
  )
}

export default Milk
