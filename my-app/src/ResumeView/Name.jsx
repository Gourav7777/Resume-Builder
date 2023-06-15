import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

const Name = () => {
  const {address,setAddress, email,setemail,phone,setphone, name, setName } = useContext(AuthContext)
  console.log(name)
  return (
    <div style={{
        border:'1px solid black',
        padding:'0px',
        alignItems:'center',
        
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
       gap:'0px'
    }}>
        <h2> {name?`${name}`:'OLIVIA WILSON'}</h2>
        
        <h5 style={{
            marginTop:'1px'
        }}> {address?`${address}`:'Address'} |  {email?`${email}`:'Email'}  |  {phone?`${phone}`:'Phone'}</h5>
        
        <h4 style={{
            marginTop:'1px'
        }}>SOFTWARE ENGINEER</h4>
    </div>
  )
}

export default Name