import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

const TechSkill = () => {
  const {
  
    skills,
    setSkills,
    currentskill,
     setCurrentSkill
  } = useContext(AuthContext);
    // const skills = ['Javascript','Redux', 'PHP', 'HTML', 'CSS', 'Node Js']
  return (
    <div>
        <div>

          <div style={{
            border:'0px solid black',
            backgroundColor:'#eefcff',
            alignItems:'center',
            padding:'5px'

          }}>

            <h5 style={{
              // backgroundColor:'#d2e4e2',
              paddingLeft:'10%'
            }}>TECHNICAL SKILLS</h5>

            </div>
            <div style={{
              marginTop:'10px',
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                paddingLeft:'10%',
                fontSize:'17px'
                
            }}>
    
    {
    
       skills.map((el)=>{
         return <li>{el.currentskill}</li>
       })
    }

            </div>


        </div>
    </div>
  )
}

export default TechSkill