import React, { useState } from 'react'
import man1 from "../../assets/man-1.jfif"
import { Mail, UserPen } from 'lucide-react'
const ProfileCard = ({user , editProfileModal , setEditProfileModal}) => {
    
   console.log(user)
  return (
    <div className='w-full min-w-0 border border-slate-200 shadow-sm bg-white p-6 rounded-md'>
       <div className='flex justify-between flex-col md:flex-row gap-6'>
       <div className='flex gap-3 items-center'>
       <img src={user.avatar} alt=""  className='h-25 w-25 rounded-full object-cover object-top'/>
       <div className='flex flex-col gap-2'>
         <h2 className='font-bold text-slate-900'>{user.name}</h2>
         <span className='py-1 px-2 rounded-full bg-sky-200/50 text-sky-600 text-xs font-medium'>{user.position}</span>
         <p className='flex gap-1 justify-center items-center text-sm text-slate-900 font-medium'><Mail  size={16} className='text-slate-500'/>{user.email}</p>
       </div>
       </div>
       <div>
        <button className='flex items-center justify-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-500 transition text-sm font-medium py-2 px-3 rounded-md gap-2' onClick={()=>setEditProfileModal(!editProfileModal)}>
            <UserPen size={16}/>
            Edit Profile
        </button>
        

       </div>
       </div>
    </div>
  )
}

export default ProfileCard
