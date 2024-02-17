import React, { useState,useEffect } from 'react';
import { useForm , Controller } from "react-hook-form"
import "./Header.css"
import image from './browzo.png'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Dropdown from './Dropdown'
import { Button, Link, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import { TextField,Paper,InputAdornment, Grid, Stack} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green } from '@mui/material/colors';



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const paperStyle={padding:15,height:'75%',width:"50%", margin:"40px auto"}

  const Swal = require('sweetalert2')
  const { handleSubmit, watch, control, setValue } = useForm({
    mode: "onChange",
  });

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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

  useEffect(() => { // Detect and store view width on initial render
    setIsMobileView(window.innerWidth < 960);
  }, []);

  useEffect(() => { // Recalculate view width on resize
    const updateView = () => setIsMobileView(window.innerWidth < 960);
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);


  return (
    <>
      <nav className='navbar'>
        <Link underline='none' href='/' to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <b>Home Thalli</b>
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
          <li className='nav-item'>
            <Link 
            color={green}
            underline='none' href='/' to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
            color={green}
            underline='none'
            href="/products"
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
          <li className='nav-item'>
            <Link
            color={green}
            underline='none'
            href='/about'
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
            color={green}
            underline='none'
            href='/Menu'
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Menu
            </Link>
          </li>
          <li className='nav-item'>
            <Link
            color={green}
            underline='none'
            href='/contact'
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
            </Link>
            <Button onClick={handleOpen}>
            <AccountCircleRoundedIcon/>
            </Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
          <Typography>New user? <Link href='/Signup'>Sign Up Now</Link></Typography>
          </Stack>
        </Grid>
        </Stack>
      </Paper>
      </Modal>
          </li>
          <div className='signup'>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;