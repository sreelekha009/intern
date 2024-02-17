import React, { useState, useEffect } from 'react';
import { useForm , Controller } from "react-hook-form"
import { TextField,Paper, Button,InputAdornment, Grid,Avatar, Stack, Modal } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CallIcon from '@mui/icons-material/Call';

const Signup = () => {

    const paperStyle={padding:15,height:'100%',width:"50%", margin:"40px auto"}
    const avatarStyle = { backgroundColor: '#1bbd7e',align:'left' }
    const Swal = require('sweetalert2')
  const { handleSubmit, watch, control, setValue } = useForm({
    mode: "onChange",
  });

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });

  const onSubmit = (data) => {
    console.log(data, "data")
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmation mail is sent ', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };
  return (
    <div>
    
      <Paper elevation={10} style={paperStyle}>
        <Stack direction={'row'}>
      <Grid container spacing={2}>
        <Stack width="70%"padding="40px" spacing={2}>
        <Grid item xs={12}>
        <Grid align="left">
            <h2><b>Sign up</b></h2>
        </Grid>
        <Controller
              name="name"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
          <TextField
          size='small'
            label="Name"
            name="name"
            fullWidth
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonOutlineOutlinedIcon/>
                </InputAdornment>
              ),
            }}
          />
          )}
          rules={{
            required: { value: true },
            pattern: {value: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/, message:"Invalid Name"}
          }}
        />
        </Grid>
        <Grid item xs={12}>
        <Controller
              name="mobile"
              control={control}
              render={({
                field: {onChange, value },
                fieldState: { error },
              }) => (
          <TextField
          size='small'
            label="Mobile"
            name="mobile"
            fullWidth
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CallIcon/>
                </InputAdornment>
              ),
            }}
          />
          )}
          rules={{
            required: { value: true },
            pattern: {value:/^[6789]\d{9}$/, message:"Invalid number"}
          }}
          />
        </Grid>
        <Grid item xs={12}>
        <Controller
              name="email"
              control={control}
              render={({
                field: {onChange, value },
                fieldState: { error },
              }) => (
          <TextField
          size='small'
            label="Email"
            name="email"
            fullWidth
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailOutlinedIcon/>
                </InputAdornment>
              ),
            }}
          />
          )}
          rules={{
            required: { value: true },
            pattern: {value:/^\S+@\S+\.\S+$/, message:"Invalid email address"}
          }}
          />
        </Grid>
        <Grid item xs={12}>
        <Controller
              name="address"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
          <TextField
          size='medium'
            label="Address"
            name="address"
            fullWidth
            variant="outlined"
            value={value}
            onChange={onChange}
          />
          )}
          rules={{
            required: { value: true },
            maxLength:'100'
          }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
          </Grid>
          </Stack>
        </Grid>
        </Stack>
      </Paper>
    </div>
  )
}

export default Signup
