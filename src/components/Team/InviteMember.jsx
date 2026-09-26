import axios from 'axios';
import { Rocket } from 'lucide-react';
import React, { useState } from 'react'

const InviteMember = ({invite, setInvite}) => {

  const [data , setData] = useState({
    email:"",
    position:"",
    userType:""
  })
const handleChange = (e)=>{
  const {name , value} = e.target;
setData((prev)=>({
      ...prev,
      [name]: value
    }))
}
const handleSubmit = async(e)=>{
  e.preventDefault();
  
 try {
   const token = localStorage.getItem("token")
  
  const response = await axios.post("http://localhost:3000/api/send/invitation", data,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  console.log(response)

 } catch (error) {
  console.log(error)
 }
}

  return (
    <div className='w-100 border border-slate-200 shadow-sm min-h-min p-6 '>
      <div className='flex justify-between'>
    <div className="title flex flex-col gap-1.5">
      <h2 className='text-lg text-slate-900 font-semibold'>Invite Member</h2>
      <p className='text-xs text-slate-500'>Send an invitation to join your workspace</p>
    </div>
    </div>
    <form action=""  className='mt-4' onSubmit={handleSubmit}>
      <label htmlFor="email" className='text-sm font-bold text-slate-900 mb-2'>Email Address</label>
      <input type="email" name="email"className='w-full p-2 outline-none border border-slate-300 shadow-xs focus:ring-1 mt-2 focus:ring-indigo-600 rounded-md' placeholder='Enter email address' onChange={handleChange} />
      {/* position */}
      <label htmlFor="role" className='text-sm font-bold text-slate-900 mb-2 mt-4'>Role/Position</label>
      <input type="text" className='w-full p-2 outline-none border border-slate-300 shadow-xs focus:ring-1 mt-2 focus:ring-indigo-600 rounded-md' placeholder='Role/Position'name='position' onChange={handleChange}/>

      {/* user Type */}
      <label htmlFor="userType"  className='text-sm font-bold text-slate-900 mt-4 flex flex-col'>User Type</label>
      <select name="userType" id="" className='w-full p-2 outline-none border border-slate-300 shadow-xs focus:ring-1 mt-2 focus:ring-indigo-600 rounded-md' onChange={handleChange}>
        <option value=""></option>
        <option value="admin">admin</option>
        <option value="employee">Employee</option>
      </select>
      {/* extra info */}
      {data === "" ? "" :  <div className='p-4 bg-indigo-200/50 mt-3 flex flex-col gap-2'>
         <h2 className='text-slate-900 font-semibold'>{data === "emplyee"? "Employee Access" : "Admin Access"}</h2>
         <p className='text-xs text-slate-800 '>{data ==="employee"?"can view assigned projects and tasks. Can update their own task" : "Can assign project , update , delete and have all other acccess except choosing the owner."}</p>
      </div>}
      <div className='flex justify-between mt-10'>
        <button onClick={()=>setInvite(!invite)} className='py-2 px-3 border border-slate-400 shadow-xs cursor-pointer text-sm text-slate-900 rounded-md font-medium'>Cancel</button>
        <button className='flex gap-1 text-white bg-indigo-600 text-sm items-center py-2 px-3 rounded-md font-medium cursor-pointer'>
        <Rocket size={18}/>
        Send Invitation
        </button>
      </div>
    </form>
    </div>
  )
}

export default InviteMember
