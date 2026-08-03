import React, { useState } from 'react'
import pendingInvitations from '../../data/PendingInvitations'


const PendingTable = () => {
    const[members , setMembers] = useState(pendingInvitations);
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
  return (
  <div className='min-w-0 w-full'>
     <div     className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] px-5 py-4 border-b border-slate-200 items-center " >
      {members.map((member)=>(
        <React.Fragment key={member.id}>
  <div className=' mb-4'>


    
       <span className='text-sm text-slate-900 font-medium'>{member.email}</span>
   
        </div>
        <div>
    <span className={`${userType(member.userType)} py-1 px-3 rounded-full mb-4`}>{member.userType}</span>
        </div>
        <div>
    <span className='text-sm text-slate-900 font-medium mb-4'>{member.invitedBy}</span>
    </div>
    <div>
    <span className=" py-1 px-3 rounded-full mb-4">{member.sentAt}</span>
        </div>
        <div className='flex justify-start items-start mb-4 gap-3' >
          <button className='border border-red-700 text-red-700 py-2 px-2 rounded-md cursor-pointer text-xs font-medium' onClick={()=>remove(member.id)}>Cancel</button>
          <button className='border border-indigo-700 text-indigo-700 py-2 px-2 rounded-md cursor-pointer text-xs font-medium' >Resend</button>
        </div>
        </React.Fragment>
      ))}
       {members.length === 0 && (<div className='font-medium'>There is no active people</div>)}
     </div>
    </div>
  )
}

export default PendingTable
