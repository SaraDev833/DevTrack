import React, { useState } from 'react';
import man1 from "../../assets/man-1.jfif"
import man2 from "../../assets/man-2.jfif"
import teamMembers from '../../data/teamMembers';
const TeamTable = ({value}) => {
   
  const searchedData = teamMembers.filter((member)=>{
    return member.name.toLowerCase().includes(value.toLowerCase())
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
    const remove = (id) =>{
      const filteredData = members.filter(member => member.id !== id);
      setMembers(filteredData);
    }
  return (
    <div className='min-w-0 w-full'>
     <div     className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] px-5 py-4 border-b border-slate-200 items-center " >
      {searchedData.map((member)=>(
        <React.Fragment key={member.id}>
  <div className='flex gap-2 items-center mb-4'>
    <img src={man1} className='h-10 w-10 rounded-full object-cover object-top' alt="" />
    <div className='flex flex-col '>
       <span className='text-sm text-slate-900 font-medium'>{member.name}</span>
       <span className='text-sm text-slate-900 font-medium'>{member.email}</span>
    </div>
        </div>
        <div>
    <span className='text-sm text-slate-900 font-medium mb-4'>{member.position}</span>
        </div>
        <div>
    <span className={`${userType(member.userType)} py-1 px-3 rounded-full mb-4`}>{member.userType}</span>
        </div>
        <div className='flex justify-start items-start mb-4'>
          <button className='bg-red-700 text-white py-2 px-2 rounded-md cursor-pointer text-xs font-medium' onClick={()=>remove(member.id)}>Remove</button>
        </div>
        </React.Fragment>
      ))}
       {members.length === 0 && (<div className='font-medium'>There is no active people</div>)}
     </div>
    </div>
  )
}

export default TeamTable
