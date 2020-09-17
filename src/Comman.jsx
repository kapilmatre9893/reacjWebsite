import React from 'react';
import { NavLink } from 'react-router-dom';


const Comman = (props) =>{

return(
    <>
    <section id="header" className="d-flex aling-item-center">
    <div className="container-fluid nav_bg">
       <div className="row">
        <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                    {props.name} <strong className="brand-name"> Web Service</strong>
                </h1>
                <h2 className="my-2">
                we are the team of talented S</h2>
            
                <div className="mt-3">
<NavLink to={props.visit} className="btn-get-started"> {props.btname}</NavLink>
                    </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsec} className="img-fluid animated" alt="home img" />
                </div>
                </div>

        </div>
        </div>
        </div>

        </section>
    </>
);
};


export default Comman;