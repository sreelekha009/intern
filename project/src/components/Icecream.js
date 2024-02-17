import React from 'react'
import cone from './ic1.jpg'
import cup from './ic2.jpg'
import stick from './ic3.jpg'
import tub from './ic4.jpg'
import { Stack } from '@mui/material'

const Icecream = () => {
    const imagestyle={height:"600px",width:"400px"}
  return (
    <div>
      <h1>ICE CREAMS</h1>
      <h2>Some of Our best Selling Ice creams </h2>
      <Stack direction={'row'}>
      <img src={cone}style={imagestyle}></img>
      <img src={cup}style={imagestyle}></img>
      <img src={stick}style={imagestyle}></img>
      <img src={tub}style={imagestyle}></img>
      </Stack>
    </div>
  )
}

export default Icecream
