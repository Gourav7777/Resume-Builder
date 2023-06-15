import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const Exp = () => {
    const {experience } = useContext(AuthContext)
  return (
    <div>

<div>
            <h3 style={{
                border:'1px solid black',
                backgroundColor:'#d2e4e2',
                paddingLeft:'10%'
            }}>WORK EXPERIENCE</h3>

            <div style={{
                
                paddingLeft:'10%',
                paddingRight:'10%',
                fontSize:'17px'
            }}>
    
    {
    
       experience.map((el)=>{
        //  return <div style={{
        //     display:'flex',
        //     justifyContent:'space-between'
        //  }}>
        //  <li>
        //  {el.degree}
              
        //    </li>
        //        <p style={{
        //         marginTop:'0px'
        //        }}>{el.passedYear}</p>
        //    </div>

        return <div style={{
            display:'flex',
            
            justifyContent:'space-between'
         }}>
         <li style={{
            
         }}>
         {el.company} ({el.designation})
         
              
           </li>
           
               <p style={{
                marginTop:'0px'
               }}>{el.workedyears}</p>
           </div>
         
       })
    }

            </div>


        </div>
    </div>
  )
}

export default Exp