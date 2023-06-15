import React, { useContext, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { AuthContext } from "../Context/AuthContextProvider";
import { Link } from "react-router-dom";
import Header from "./Header";
import { BDiv } from "bootstrap-4-react";
import Skills from "./Skills";
const Resumeform = () => {
  const [exp, setExp] = useState([1]);

  const {
    address,
    setAddress,
    email,
    setemail,
    phone,
    setphone,
    name,
    setName,
  } = useContext(AuthContext);

  const handleExp = () => {
    setExp([...exp, 1]);
  };

  return (
    <>
      <Header />
      <br />
      <div
        style={{
          padding: "10px",
          width: "70%",
          margin: "auto",
        }}
      >
        <h3>Add Personal Information here </h3>

        <BDiv shadow p="3" mb="5" bg="light" rounded>
          <div
            style={{
              display: "flex",
              border: "0px solid gray",
              justifyContent: "space-evenly",
              padding: "15px",
            }}
          >
            <div>
              <label> Candidate Name </label> <br />
              <input
                type="text"
                placeholder="Add Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label> Candidate Email </label> <br />
              <input
                type="email"
                placeholder="Add email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div>
              <label> Candidate Address </label> <br />
              <input
                type="textarea"
                placeholder="Add Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label> Candidate Phone No.</label> <br />
              <input
                type="tel"
                placeholder="Add Number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
          </div>
        </BDiv>
        <h3>Add Education here</h3>

        <BDiv shadow  p="3" mb="5" bg="light" rounded>
          <Education />
        </BDiv>

        <h3>Add Experience here</h3>
        <BDiv shadow p="3" mb="5" bg="light" rounded>
          <Experience />
        </BDiv>

        <h3>Add Skills here</h3>

        <BDiv shadow p="3" mb="5" bg="light" rounded>
          <Skills/>
        </BDiv>

        <Link to="/viewresume" style={{
          fontSize:'25px',
          fontWeight: 'bold',
          // color:'#2195dc'
        }} >click here to view resume</Link>
      </div>
      <br/>
    </>
  );
};

export default Resumeform;
