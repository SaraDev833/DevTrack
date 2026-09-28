import React, { useEffect, useState } from 'react';
import man1 from "../../assets/man-1.jfif"
import man2 from "../../assets/man-2.jfif"
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const TeamTable = ({value}) => {
   const [teamMembers , setTeamMembers]= useState([]);
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const currentUser = decoded.userId;
  
   useEffect(()=>{
    const token = localStorage.getItem("token")
         const getActiveMembers = async(req, res)=>{
              const response = await axios.get("http://localhost:3000/api/active/members" , {
                headers:{
                  Authorization:`Bearer ${token}`
                }
              })
              // console.log(response.data.activeMembers)
              setTeamMembers(response.data.activeMembers)
         }
         getActiveMembers()
   },[])
  const searchedData = teamMembers.filter((member)=>{
    return member.user.name.toLowerCase().includes(value.toLowerCase())
  }
       
    )
    const [members , setMembers] = useState(teamMembers);
    const userType = (type)=>{
      switch(type){
        case "Owner":
          return 'bg-indigo-200/50 text-indigo-600 text-sm';
          case "Manager":
             return 'bg-sky-200/50 text-sky-600 text-sm';
             default:
               return 'bg-green-200/50 text-green-600 text-sm'
      }
    }
    const remove =async (id) =>{
      const token = localStorage.getItem("token");
      try {
        const response = await axios.delete(`http://localhost:3000/api/remove/member/${id}`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
     
        setTeamMembers((prev)=>
        prev.filter((member)=>member.user._id !== id)
      )
      } catch (error) {
        console.log(error.response?.data)
      }
    }
  return (
<div className="min-w-0 w-full overflow-x-auto">
  <div className="min-w-[500px]">

    {searchedData.map((member) => (
      <div
        key={member._id}
        className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 px-5 py-4 border-b border-slate-200"
      >

        {/* Member */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={man1}
            className="h-10 w-10 rounded-full object-cover object-top shrink-0"
            alt=""
          />

          <div className="flex flex-col min-w-0">
            <span className="text-sm text-slate-900 font-medium truncate">
              {member.user.name}
            </span>

            <span className="text-xs text-slate-500 truncate">
              {member.user.email}
            </span>
          </div>
        </div>

        {/* Position */}
        <div>
          <span className="text-sm text-slate-700 text-nowrap">
            {member.position || "—"}
          </span>
        </div>

        {/* User Type */}
        <div>
          <span
            className={`${userType(member.userType)} inline-block py-1 px-3 rounded-full text-nowrap`}
          >
            {member.userType}
          </span>
        </div>

        {/* Remove */}
        <div className="flex justify-start">
          <button
            disabled={member.user._id === currentUser}
            onClick={() => remove(member.user._id)}
            className={`py-2 px-3 rounded-md text-xs font-medium transition
              ${
                member.user._id === currentUser
                  ? "bg-red-300 text-white cursor-not-allowed"
                  : "bg-red-700 text-white hover:bg-red-800 cursor-pointer"
              }
            `}
          >
            Remove
          </button>
        </div>

      </div>
    ))}

    {searchedData.length === 0 && (
      <div className="px-5 py-8 text-center text-sm font-medium text-slate-500">
        There is no active people
      </div>
    )}

  </div>
</div>
  )
}

export default TeamTable
