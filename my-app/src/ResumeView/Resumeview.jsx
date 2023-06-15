import React from 'react'
import Name from './Name'
import TechSkill from './TechSkill'
import Educat from './Educat'
import Exp from './Exp'

const Resumeview = () => {
  return (
    <div style={{
        
        padding:'10px',
        border:'2px solid black',
        width:'50%',
        margin:'auto'
    }}>
        <Name></Name>
        <TechSkill></TechSkill>
        <Educat></Educat>
        <Exp></Exp>
    </div>
  )
}

export default Resumeview