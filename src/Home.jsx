import React from 'react';

import Comman from './Comman';
import Web from '../src/images/home.png'

const Home = () =>{

return(
    <>
    <Comman name="Grow your Business with" 
   imgsec={Web} 
   visit="/Service" 
   btname="GEt Staerted" 
   />
    </>
);
};


export default Home;