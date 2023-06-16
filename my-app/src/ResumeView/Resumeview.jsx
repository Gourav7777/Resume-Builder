import React, { useState } from "react";
import Name from "./Name";
import TechSkill from "./TechSkill";
import Educat from "./Educat";
import Exp from "./Exp";
import { BDiv } from "bootstrap-4-react";
import Awards from "./Awards";
import Project from "./Project";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Alert } from "bootstrap-4-react";
const Resumeview = () => {
  const [activee, setActivee] = useState(false);
  const {
    address,
    setAddress,
    email,
    setemail,
    phone,
    setphone,
    name,
    setName,
    skills,
    setSkills,
    experience,
    setExperience,
    education,
    setEducation,
    activeExperience,
    setActiveExperience,
    active,
    setactive,
  } = useContext(AuthContext);

  const pdf = () => {
    setActivee(true);
    const capture = document.querySelector(".downloadd");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");

      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("resume.pdf");
    });
    setActivee(false);
    setAddress("");
    setName("");
    setemail("");
    setphone("");
    setSkills([]);
    setExperience([]);
    setEducation([]);
    setActiveExperience(false);
    setactive(false);
    alert("Resume Downloaded");
  };

  return (
    <>
      <button
        onClick={pdf}
        style={{
          backgroundColor: "#2195dc",
          border: "0px solid black",
          color: "white",
          borderRadius: "15px",
          marginTop: "20px",
          cursor: "pointer",
          fontSize: "18px",
          marginLeft: "340px",
          marginBottom: "25px",
          padding: "5px",
        }}
      >
        Click here to Download
      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "0px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width: "50%",
          margin: "auto",
        }}
      >
        <div
          className="downloadd"
          style={{
            border: "4px solid light",
            borderRadius: "4px",
            width: "95%",
            padding: "0px",
            margin: "auto",
          }}
        >
          {/* <BDiv shadow p="3" mb="5" rounded> */}
          <Name></Name>
          <br />
          <TechSkill></TechSkill>
          <br />
          <Educat></Educat>
          <br />
          <Exp></Exp>
          <br />
          <Project></Project>
          <br />
          <Awards></Awards>
          <br />
          {/* </BDiv> */}
        </div>
      </div>

      <span></span>

      <br />
      <Link
        to="/"
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginLeft: "340px",
          marginTop: "20px",
        }}
      >
        Go Back to resume form
      </Link>
      <br />

      <span></span>

      <span></span>

      <span></span>
      <div
        style={{
          height: "50px",
        }}
      ></div>
    </>
  );
};

export default Resumeview;
