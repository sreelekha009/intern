import React from 'react'
import image from './milk.jpg'
import curd from './curd.jpg'
import paneer from './paneer.jpg'
import butter from './butter.jpg'
import icecream from './ice-cream.jpg'
import ghee from './ghee.jpg'
import './About.css'
import { Link } from '@mui/material'
import MoveableElement from './MoveableElement'
import Typewriter from "typewriter-effect"
import Header from './Header'

const About = () => {
    const imagestyle={height:'500px',width:"400px"}
    const immstyle={height:'500px'}
    const element = <div>This is the moveable element.</div>;

  return (
    <div>
        <div className='text'>
            <h1>
        <Typewriter
        options={{
          strings: ["Our Products"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
      </h1>
      </div>
      <div class="image-container">
      <Link href='/milk'
      className='about-link'><img src={image} style={imagestyle} ></img></Link>
      <Link href='/curd'>
      <img src={curd}style={imagestyle}></img>
      </Link>
      <Link href='/paneer'>
      <img src={paneer}style={imagestyle}></img>
      <div class="image-text">Paneer.</div>
      </Link>
      <Link href='/butter'>
      <img src={butter}style={imagestyle}></img>
      </Link>
      </div>
      <div className="image-container2">
       <Link href='/icecreams'><img src={icecream}style={imagestyle}></img></Link>
        <Link href='/ghee'><img src={ghee}style={imagestyle}></img></Link>
      </div>
    </div>
  )
}

export default About
