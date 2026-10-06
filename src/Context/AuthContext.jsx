import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

 export const AuthContext = createContext();

 export const AuthProvider = ({children})=>{
    const [member , setMember] = useState("");
    const[user,setUser] = useState("")
    const[isLoading , setIsLodaing] = useState(true)
   const getCurrentUser = async()=>{
   try {
   const token = localStorage.getItem("token");
   if(!token){
    setIsLodaing(false);
    return
   }
   const response = await axios.get( "http://localhost:3000/api/current-user-profile",
    {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }

   )
   setUser(response.data.user);
   setMember(response.data.member)
   } catch (error) {
    console.log(error.response?.data?.message)
    setUser(null)
    setMember(null)
   }
   finally{
setIsLodaing(false)
   }
   }
     useEffect(() => {
    getCurrentUser();
  }, []);
      return(
        <AuthContext.Provider
        value={{
            user , setUser, member , setMember, isLoading, setIsLodaing, getCurrentUser
        }}
        >
                  {children}
        </AuthContext.Provider>
      )
 }

