import React from 'react'
import ImageSlider from './ImageSlider';

const Home = () => {
	const slides = [
		{url: "https://i.pinimg.com/564x/ce/64/4c/ce644c2869d5b7e7678b30110609bfa0.jpg"},
		{ url: "https://i.pinimg.com/564x/72/ab/0f/72ab0f1e0ad7666f412805557fed8dc6.jpg", title: "boat"  },
		{ url: "https://i.pinimg.com/564x/13/86/9a/13869ae64d0bfd7af8c0d3761b92dcec.jpg"},
		{url: "https://i.pinimg.com/564x/6e/fb/d5/6efbd51517b7bd70803e8ff01cbe31d4.jpg"},
	  ];
	  const containerStyles = {
		width: "100%",
		height: "600px",
	  };
  return (
	<div>
	  <div style={containerStyles}>
        <ImageSlider slides={slides} /></div>
	</div>
  )
}

export default Home
