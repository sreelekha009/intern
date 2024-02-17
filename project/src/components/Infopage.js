import React from 'react'
import { useEffect,useState } from 'react'
import { Stack, Typography,Paper,Grid} from '@mui/material'
import './Infopage.css'
import milk from './farm.jpg'
import cow from './cow.jpg'
import Header from './Header'


const Infopage = () => {
    const paperstyle={height:'550px'}
    const immstyle={height:'200px'}
    const [isMobileView, setIsMobileView] = useState(false); // Detect viewport width

  useEffect(() => {
    const updateView = () => {
      const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
      setIsMobileView(isMobile);
    };

    window.addEventListener('resize', updateView);

    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <div>
         <Paper elevation={10} style={{ padding: isMobileView ? '40px' : '40px' }}>
         <Typography variant="h2" align="center">
          About Home Thalli
        </Typography>
        <Grid container spacing={isMobileView ? 2 : 4}>
          <Grid item xs={12} md={6}>
            <div className="info">
            The concept of a home thali encapsulates the essence of home-cooked meals in many cultures, particularly in India. The effort and care put into cooking at home add a sentimental element to the meal. The act of cooking itself can be therapeutic and rewarding, promoting mindfulness and enjoyment.
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction={isMobileView ? 'column' : 'row'} spacing={2}>
              <div>Are you..?

Skilled at cooking?

Universally liked for your cooking?

Interested in earning income from Home?

Looking to start a business without any intial investiment?

If yes...

• You can Start your own business from your kitchen now..!

You can prepare the food in your kitchen and send to the people who wants home made food.

You can earn income by working at your convenience..!
              
              </div>
            </Stack>
            <div className="image">
                <img src={milk}style={immstyle}></img>
            <img src={cow}style={immstyle}></img>
              </div>
          </Grid>
        </Grid>
        </Paper>
    </div>
  )
}
export default Infopage
