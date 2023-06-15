import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {
    const [address,setAddress] = useState('')
    const [email,setemail] = useState('')
    const [phone,setphone] = useState('')
    const [name,setName] = useState('')
    const [education, setEducation] = useState([])
    const [institute,setInstitute] = useState('')
    const [degree,setDegree] = useState('')
    const [passedYear,setPassedYear] = useState('')
    const [active,setactive] = useState(false)

    const [experience, setExperience] = useState([])
    const [activeExperience,setActiveExperience] = useState(false)
  
    const [designation,setDesignation] = useState('')
    const [company,setCompany] = useState('')
    const [workedyears,setWorkedyears] = useState('')
  return (

    
 <AuthContext.Provider value={{
    address,setAddress,    email,setemail, phone,setphone,  name,setName,  education,setEducation, 
     institute,setInstitute   ,degree,setDegree,  passedYear,setPassedYear,   active,setactive,activeExperience,setActiveExperience,  experience,setExperience,  designation,setDesignation ,
      company,setCompany,   workedyears,setWorkedyears
 }}>
    {children}
 </AuthContext.Provider>


    
  )
}

export default AuthContextProvider