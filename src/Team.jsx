import React from 'react';
import kapilimg from './images/logo.jpg';



 
const Team = () =>{
   
  
    return (
        <>
          <div className="my-5">
      <h1 className="text-center"> Dark web Developer memabers</h1>
      </div>
      <div className="container-fluid mb-5">
       <div className="row">
        <div className="col-10 mx-auto">
            <div className="hello">
            <table className="table table-bordered">
  <thead className="thead-dark">
    <tr class="table-primary">
      <th scope="col">#</th>
      <th scope="col">Profile</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Developer</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-warning">
      <th scope="row">1</th>
      <td className="hello1"><img src={kapilimg} className="img-fluid" alt="kapil" /></td>
      <td>Kapil Matre</td>
      <td className="bg-secondary"> Matre</td>
      <td className="bg-info">FrontEnd Developer</td>
    </tr>
    <tr class="bg-warning">
      <th scope="row">2</th>
      <td className="hello1"><img src={kapilimg} className="img-fluid" alt="Hitesh" /></td>
      <td>Hitesh</td>
      <td className="bg-secondary"> Matre</td>
      <td className="bg-info">BackEnd  Developer</td>
    </tr>
    <tr class="bg-warning">
      <th scope="row">3</th>
      <td className="hello1"><img src={kapilimg} className="img-fluid" alt="Sachin" /></td>
      <td>Sachin</td>
      <td className="bg-secondary">Matre</td>
      <td className="bg-info">Civil engineering </td>
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