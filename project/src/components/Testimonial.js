import React from 'react'
import { Stack,Paper, Typography } from '@mui/material'
import test from './test1.jpg'
import test2 from './test2.jpg'
import test3 from './test3.jpg'
import test4 from './test4.jpg'
import test5 from './test5.jpg'

const Testimonial = () => {

    const imagestyle={height:"200px"}
    const papstyle={height:'400px',width:"300px"}
  return (
    <div>
        <h1>Testimonials</h1>
        <Stack direction={'row'}>
      <Paper elevation={5}style={papstyle}>
        <img src={test} style={imagestyle}></img><Typography>hello im emma watson. I love dairy products that are being sold by browzo dairy. they are farm friendly.</Typography>
      </Paper>
      <Paper elevation={5}style={papstyle}>
        <img src={test2} style={imagestyle}></img><Typography>hello im emma watson. I love dairy products that are being sold by browzo dairy. they are farm friendly.</Typography>
      </Paper>
      <Paper elevation={5}style={papstyle}>
        <img src={test3} style={imagestyle}></img><Typography>hello im emma watson. I love dairy products that are being sold by browzo dairy. they are farm friendly.</Typography>
      </Paper>
      <Paper elevation={5}style={papstyle}>
        <img src={test4} style={imagestyle}></img><Typography>hello im emma watson. I love dairy products that are being sold by browzo dairy. they are farm friendly.</Typography>
      </Paper>
      <Paper elevation={5}style={papstyle}>
        <img src={test5} style={imagestyle}></img><Typography>hello im emma watson. I love dairy products that are being sold by browzo dairy. they are farm friendly.</Typography>
      </Paper>
      </Stack>
    </div>
  )
}

export default Testimonial
