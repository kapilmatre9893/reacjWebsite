import React, { useState } from 'react';

const Contact = () =>{
    const [date,setDate]=useState({
        fullname:"",
        Mobile:"",
        Email:"",
        Msg:"",
    });

    const InputEvent = (event) => {
        const{name,value}= event.target;
        setDate((prevel) =>{
            return {
                ...prevel,
                [name]:value,
            }
        })

    };
    const FromSubmit = (e) => {
        e.preventDefault();
        alert(`${date.fullname}`)

    };

return(
    <>
<div className="my-5">
    <h1 className="text-center"> Contact</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FromSubmit}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={date.fullname} onChange={InputEvent} placeholder="Enter Your Full Name"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name="Email" value={date.Email} onChange={InputEvent} placeholder="name@example.com"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Mobile No.</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" name="Mobile" value={date.Mobile} onChange={InputEvent} placeholder="Your Mobile No."/>
  </div>


  <div className="form-group">
    <label for="exampleFormControlTextarea1">Massage</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" name="Msg" value={date.Msg} onChange={InputEvent} rows="3"></textarea>
  </div>
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
</form>
                </div>
                </div>
                </div>
    </>
);
};


export default Contact;