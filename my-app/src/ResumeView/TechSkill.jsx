import React from 'react'

const TechSkill = () => {
    const skills = ['Javascript','Redux', 'PHP', 'HTML', 'CSS', 'Node Js']
  return (
    <div>
        <div>
            <h3 style={{
                border:'1px solid black',
                backgroundColor:'#d2e4e2',
                paddingLeft:'10%'
            }}>TECHNICAL SKILLS</h3>

            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                paddingLeft:'10%',
                fontSize:'17px'
                
            }}>
    
    {
    
       skills.map((el)=>{
         return <li>{el}</li>
       })
    }

            </div>


        </div>
    </div>
  )
}

export default TechSkill