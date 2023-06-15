import React from 'react'

const Project = () => {

    const projects = [
        {
            heading:'Instant Chat App',
            respo: 'Developed a Standard Messaging App using Socket.io'
        },
        {
            heading:'Weather App',
            respo: 'Collect and analyse user sample data from app'
        }
]
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
                
                paddingLeft:'10%'
            }}>Projects</h5>
            </div>

            <div style={{
                 marginTop:'10px',
                paddingLeft:'10%',
                paddingRight:'10%',
                fontSize:'17px'
            }}>
    {
        projects.map((el)=>{
   
             return <div>

              <li style={{
                fontWeight:'bold'
              }}>
                {el.heading}
             </li>

             <p style={{
                marginLeft:'25px'
             }}>{el.respo}</p>
             </div>
        })
    }
    

            </div>


        </div>


    </div>
  )
}

export default Project