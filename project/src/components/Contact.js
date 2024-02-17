import React from 'react'
import TextField from '@mui/material/TextField';
import { Button,Paper, Stack } from '@mui/material';
import Typewriter from "typewriter-effect"
import Header from './Header'

const Contact = () => {
  return (
    <div>
        <Paper elevation={5}>
            <Stack direction={'column'}>
        <h1><Typewriter
        options={{
          strings: ["Contact US"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      /></h1>
      <TextField id="standard-basic" label="Name" variant="standard"  />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Phone number" variant="standard" />
      <TextField id="standard-basic" label="Message" variant="standard" />
      <Button>Submit</Button>
      </Stack>
      </Paper>
    </div>
  )
}

export default Contact
