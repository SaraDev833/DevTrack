import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

 export const AuthContext = createContext();

 export const AuthProvider = ({children})=>{
    const [member , setMember] = useState("");
    const[user,setUser] = useState("")
useEffect(()=>{
   const token = localStorage.getItem("token");
const currentUser = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/api/current-user-profile", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    setUser(response.data.user)
   setMember(response.data.member)
  } catch (error) {
    console.log(error)
  }
}
currentUser()
},[])
      return(
        <AuthContext.Provider
        value={{
            user , setUser, member , setMember
        }}
        >
                  {children}
        </AuthContext.Provider>
      )
 }

