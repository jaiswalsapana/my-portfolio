import React from "react";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const {fullname, phone, email, msg} = data;
    if (fullname && phone && email && msg){
    const res =  fetch("https://portfolio-15ba6-default-rtdb.firebaseio.com/userDataRecord.json",{
      method : "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phone,
        email,
        msg,
      }),

    });
    if(res){
      alert("Data Stored");
    } else {
      alert("Data not Stored");
    }
  } else {
    alert("plz fill the data");
  }

  };







  return (
  
  
  <>
  <div className="my-5">
  <h1 className="text-center">Contact me</h1>
</div>

<div className="container">
<div className="row">
<div className="col-md-6 col-10 mx-auto">
 <form onSubmit={formSubmit}>
    <div className="mb-3">
       <label for="exampleFormControlInput1" className="form-label">Full name</label>
       <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your full name" />
    </div>
    <div className="mb-3">
       <label for="exampleFormControlInput1" className="form-label">Phone number</label>
       <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your phone number" />
    </div>
    <div className="mb-3">
       <label for="exampleFormControlInput1" className="form-label">Email address</label>
       <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
    </div>
    <div className="mb-3">
       <label for="exampleFormControlTextarea1" className="form-label">Type your message for me</label>
       <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
    </div>
    <button class="button-86" role="button">Submit</button>
 </form>
  </div>
  </div>
  </div>
  
  
  </>

  );
};

export default Form;
