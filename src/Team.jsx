import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiDataPoku="https://pokeapi.co/api/v2/pokemon/ditto";
 
const Team = () =>{
    const[num,setNum]=useState({});

  useEffect(() =>{
        apiData();

},[]);

const apiData = async () =>{
    const response =await axios.get(apiDataPoku);
    setNum(response.data);
};

  
    return (
        <>
          <div className="my-5">
      <h1 className="text-center"> Dark web Developer</h1>
      </div>
      <div className="container-fluid mb-5">
       <div className="row">
        <div className="col-10 mx-auto">
            <div className="hello">
    
                </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Team ;