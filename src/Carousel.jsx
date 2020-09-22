import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import  Si1 from "../src/images/side1.jpeg";
import  Si3 from "../src/images/side3.jpeg";
import  Si2 from "../src/images/silde2.jpeg";
const Carou = () =>{

    return (
        <>
           <div className="container">
             <h1 className="kapil">kapil</h1>
        <div className="row">
      <Carousel>
  <Carousel.Item>
  <div className="card">
  <img className="card-img-top" src={Si3} alt="Cardimagecap" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">kjdbsajkdb</h5>
  <p className="card-text">dnsdfnskafnsa</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>

</div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="card">
  <img className="card-img-top" src={Si2} alt="Cardimagecap" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">kjdbsajkdb</h5>
  <p className="card-text">dnsdfnskafnsa</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>

</div>
  </Carousel.Item>
  <Carousel.Item>
  
  <div className="card">
  <img className="card-img-top" src={Si1} alt="Cardimagecap" />
  <div className="card-body">
    <h5 className="card-title font-weight-bold">kjdbsajkdb</h5>
  <p className="card-text">dnsdfnskafnsa</p>
    <NavLink to="/contact" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
  </Carousel.Item>
</Carousel>
</div>
</div>
        </>
    );

};


export default Carou;