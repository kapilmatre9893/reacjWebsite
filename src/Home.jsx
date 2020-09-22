import React from 'react';

import Comman from './Comman';
import Web from '../src/images/home.png';
import Carousel from './Carousel';

const Home = () =>{

return(
    <>
    <Comman name="Grow your Business with" 
   imgsec={Web} 
   visit="/Service" 
   btname="Get Started" 
   />
   <br />
   <br />
   <Carousel />
    </>
);
};


export default Home;