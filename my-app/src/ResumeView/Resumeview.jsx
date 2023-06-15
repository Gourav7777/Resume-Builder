import React from "react";
import Name from "./Name";
import TechSkill from "./TechSkill";
import Educat from "./Educat";
import Exp from "./Exp";
import { BDiv } from "bootstrap-4-react";
const Resumeview = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding:'0px'
      }}
    >
      <div
        style={{
          border: "0px solid black",
          width: "55%",
          margin: "auto",
          padding:'0px'
        }}
      >
        <BDiv shadow p="3" mb="5" rounded>
          <Name></Name>
          <br />
          <TechSkill></TechSkill>
          <br />
          <Educat></Educat>
          <br />
          <Exp></Exp>
        </BDiv>
      </div>
    </div>
  );
};

export default Resumeview;
