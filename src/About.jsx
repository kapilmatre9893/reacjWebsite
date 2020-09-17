import React from 'react';
import Comman  from './Comman';
import Web from '../src/images/home2.png'

 
const About = () =>{

return(
    <>
   <Comman name="Welcome To About Page" 
   imgsec={Web} 
   visit="/contact" 
   btname="Contact Now" 
   />
    </>
);
};


export default About;