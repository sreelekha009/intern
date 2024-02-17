import React, { useState, useEffect } from 'react';
import { useForm , Controller } from "react-hook-form"
import { TextField,Paper, Button,InputAdornment, Grid, Stack, Link } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";



const Formms = ({ data1 }) => {
  const paperStyle={padding:15,height:'75%',width:"50%", margin:"40px auto"}
 
 
  const Swal = require('sweetalert2')
  const { handleSubmit, watch, control, setValue } = useForm({
    mode: "onChange",
  });
  
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const onSubmit= (data) => {
    console.log(data, "data")
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'OTP has been sent!',
        showConfirmButton: false,
        timer: 1500
      })
  };

  const handleSendOtp = async () => {
    await sendOtp(phoneNumber);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const sendOtp = async (phoneNumber) => {
    const response = await axios.post(`https://d7networks.com/api/verifier/send`, {
      phoneNumber: phoneNumber,
    });
  
    if (response.status === 200) {
      // OTP sent successfully
      console.log("OTP sent successfully");
    } else {
      // Error sending OTP
      console.error("Error sending OTP");
    }
  };
  
  return (
    <>
      <Paper elevation={10} style={paperStyle}>
        <Stack direction={'row'}>
      <Grid container spacing={2}>
        <Stack width="70%"padding="40px" spacing={2}>
        <Grid align="left">
            <h2><b>Login </b></h2>
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
            label=" Enter Your Mobile Number"
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
        <FormControlLabel required control={<Checkbox />} label="By continuing , I agree to Terms&Conditons"/>
        

        <Grid item xs={12}>
            <Link>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit(onSubmit)}
          >
            Send OTP
          </Button>
          </Link>
          </Grid>
          </Stack>
        </Grid>
        </Stack>
      </Paper>
      </>
  );
        };

export default Formms;