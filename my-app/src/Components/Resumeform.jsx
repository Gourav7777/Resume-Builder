import React, { useContext, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { AuthContext } from "../Context/AuthContextProvider";
import { Link } from "react-router-dom";

const Resumeform = () => {
  

  const [exp, setExp] = useState([1]);

   const {address,setAddress, email,setemail,phone,setphone, name, setName } = useContext(AuthContext)


  

  const handleExp = () => {
    setExp([...exp, 1]);
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h3>Add Personal Information here</h3>

      <div
        style={{
          display: "flex",
          border: "1px solid gray",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <div>
          <label> Interviewer Name </label> <br />
          <input  type="text" placeholder="Add Name"  value={name}  onChange={(e)=>setName(e.target.value)}  />
        </div>

        <div>
          <label> Interviewer Email </label> <br />
          <input type="email" placeholder="Add email" value={email} onChange={(e)=>setemail(e.target.value)}   />
        </div>

        <div>
          <label> Interviewer Address </label> <br />
          <input type="textarea" placeholder="Add Address" value={address} onChange={(e)=>setAddress(e.target.value)} />
        </div>

        <div>
          <label> Interviewer Phone No.</label> <br />
          <input type="tel" placeholder="Add Number" value={phone} onChange={(e)=>setphone(e.target.value)} />
        </div>
      </div>

      <h3>Add Education here</h3>

      

      <Education/>


    

      <h3>Add Experience here</h3>

     <Experience />;
     
     




      <h3>Add Skills  here</h3>

      <Link to='/viewresume'>
        click here to view resume
       </Link>
    </div>
  );
};

export default Resumeform;
