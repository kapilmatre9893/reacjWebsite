import React, { useEffect, useState } from 'react';
import kapilimg from 'src/images/logo.jpg';
import axios from 'axios';



 
const Team = () =>{
  const [num,setNum]= useState([]);
   

  useEffect(() => {
   async function getData(){
     const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
     console.log(res.data);
setNum(res.data);
   }
   getData();
  },[]);
  
    return (
        <>
          <div className="my-5">
      <h1 className="text-center"> Dark web Team memabers</h1>
      </div>
      <div className="container-fluid mb-5">
       <div className="row">
        <div className="col-10 mx-auto">
            <div className="hello">
            <table className="table table-bordered">
  <thead className="thead-dark">
    <tr className="table-primary">
      <th scope="col">#</th>
      <th scope="col">Profile</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Developer</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-warning">
      <th scope="row">1</th>
      <td className="hello1"><img src={kapilimg} className="img-fluid" alt="kapil" /></td>
      <td>Kapil Matre</td>
    <td className="bg-secondary"> api </td>
      <td className="bg-info">FrontEnd Developer</td>
    </tr>
    <tr className="bg-warning">
      <th scope="row">2</th>
      <td className="hello1"><img src={kapilimg} className="img-fluid" alt="Hitesh" /></td>
      <td>Hitesh</td>
      <td className="bg-secondary"> Matre</td>
      <td className="bg-info">BackEnd  Developer</td>
    </tr>
    <tr className="bg-warning">
      <th scope="row">3</th>
      <td className="hello1"><img src={kapilimg} className="img-fluid" alt="Sachin" /></td>
      <td>Sachin</td>
      <td className="bg-secondary">Matre</td>
      <td className="bg-info">Civil engineering </td>
    </tr>
  </tbody>
</table>

      </div>
      <br />
      <br />
     <div className="api">
       <h1>api data</h1>
  
    <table className="table table-bordered">
  <thead className="table-primary">
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">userId</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{num.map(ap =><div>{ap.id}</div>)}</td>
      <td>{num.map(ap =><div>{ap.title}</div>)}</td>
      <td>{num.map(ap =><div>{ap.userId}</div>)}</td>
      <td>{num.map(ap =><div>{ap.body}</div>)}</td>
    </tr>
  

  </tbody>
</table>


    
       </div>

            </div>
            </div>
            </div>
        </>
    );
};

export default Team ;