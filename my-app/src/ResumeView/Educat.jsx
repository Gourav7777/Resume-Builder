import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const Educat = () => {
    const {education } = useContext(AuthContext)
   
  return (
    <div>


<div>
            <h3 style={{
                border:'1px solid black',
                backgroundColor:'#d2e4e2',
                paddingLeft:'10%'
            }}>EDUCATION</h3>

            <div style={{
                
                paddingLeft:'10%',
                paddingRight:'10%',
                fontSize:'17px'
            }}>
    
    {
    
       education.map((el)=>{
         return <div style={{
            display:'flex',
            
            justifyContent:'space-between'
         }}>
         <li style={{
            
         }}>
         {el.degree} ({el.institute})
         
              
           </li>
           
               <p style={{
                marginTop:'0px'
               }}>{el.passedYear}</p>
           </div>
         
       })
    }

            </div>


        </div>
    </div>
  )
}

export default Educat