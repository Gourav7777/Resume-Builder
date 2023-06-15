import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const Name = () => {
  const {address,setAddress, email,setemail,phone,setphone, name, setName } = useContext(AuthContext)
  console.log(name)
  return (
    <div style={{
        border:'0px solid black',
        padding:'10px',
        alignItems:'center',
        backgroundColor:'#eefcff',
        display:'flex',
        flexDirection:'column',
        
        justifyContent:'center',
       
    }}>
        <h2 style={{
          color:'#1a81cc'
        }}> {name?`${name}`:'OLIVIA WILSON'} </h2>
        
        <h5 style={{
            marginTop:'1px'
        }}> {address?`${address}`:'Address'} |  {email?`${email}`:'Email'}  |  {phone?`${phone}`:'Phone'}</h5>
        
        <h4 style={{
            marginTop:'1px',
            color:'#1a81cc'
        }}>SOFTWARE ENGINEER</h4>
    </div>
  )
}

export default Name