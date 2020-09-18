import React from 'react';



 
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
            <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Developer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Reactjs</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Angular</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Bootstrap</td>
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