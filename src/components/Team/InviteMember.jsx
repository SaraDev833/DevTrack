import { Rocket } from 'lucide-react';
import React, { useState } from 'react'

const InviteMember = ({invite, setInvite}) => {
  const [userType , setUserType] = useState("");
  console.log(userType)
  return (
    <div className='w-100 border border-slate-200 shadow-sm min-h-min p-6 '>
      <div className='flex justify-between'>
    <div className="title flex flex-col gap-1.5">
      <h2 className='text-lg text-slate-900 font-semibold'>Invite Member</h2>
      <p className='text-xs text-slate-500'>Send an invitation to join your workspace</p>
    </div>
    </div>
    <form action=""  className='mt-4'>
      <label htmlFor="email" className='text-sm font-bold text-slate-900 mb-2'>Email Address</label>
      <input type="email" className='w-full p-2 outline-none border border-slate-300 shadow-xs focus:ring-1 mt-2 focus:ring-indigo-600 rounded-md' placeholder='Enter email address' />

      {/* user Type */}
      <label htmlFor="userType"  className='text-sm font-bold text-slate-900 mt-4 flex flex-col'>User Type</label>
      <select name="userType" id="" className='w-full p-2 outline-none border border-slate-300 shadow-xs focus:ring-1 mt-2 focus:ring-indigo-600 rounded-md' onChange={(e)=>setUserType(e.target.value)}>
        <option value=""></option>
        <option value="Employee">Employee</option>
        <option value="Manager">Manager</option>
      </select>
      {/* extra info */}
      {userType === "" ? "" :  <div className='p-4 bg-indigo-200/50 mt-3 flex flex-col gap-2'>
         <h2 className='text-slate-900 font-semibold'>{userType === "Employee"? "Employee Access" : "Manager Access"}</h2>
         <p className='text-xs text-slate-800 '>{userType ==="Employee"?"can view assigned projects and tasks. Can update their own task" : "Can assign project , update , delete and have all other acccess except choosing the owner."}</p>
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
