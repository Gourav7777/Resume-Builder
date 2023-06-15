import React, { useState } from "react";
import Name from "./Name";
import TechSkill from "./TechSkill";
import Educat from "./Educat";
import Exp from "./Exp";
import { BDiv } from "bootstrap-4-react";
import Awards from "./Awards";
import Project from "./Project";

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
const Resumeview = () => {
 
  const [active,setActive] = useState(false)

  const pdf=()=>{
    setActive(true)
const capture = document.querySelector('.downloadd')
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p','mm','a4')

      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight)
      doc.save('resume.pdf')
    })
    setActive(false)
  }

  return (
    <>

     <button onClick={pdf}>Download</button>


            <div  
              style={{
                marginTop: "20px",
                padding:'0px',
              
              }} >


      <div
                className="downloadd" 
        style={{
          border: "1px solid grey",
          width: "50%",
          padding:'0px',
          margin:'auto',
          
          // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
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
    
      <br/>
        </>


  );
};

export default Resumeview;
