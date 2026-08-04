import React, { useState } from 'react'
import TeamNavbar from '../components/Team/TeamNavbar'
import TeamTable from '../components/Team/TeamTable'
import InviteMember from '../components/Team/InviteMember'
import { useOutletContext } from 'react-router-dom'
import PendingTable from '../components/Team/PendingTable'

const Team = () => {
  const {invite , setInvite} = useOutletContext()
  const [tab , setSelectedTab] = useState("active")
    const [value , setValue] = useState("");
 
    const searchValue= (value)=>{
      setValue(value)
    }
  return (
     <div className="w-full min-w-0 bg-slate-100 space-y-6">
      <TeamNavbar searchValue= {searchValue}/>
      <div className='flex justify-between min-w-0 gap-4'>
             <div className='border border-slate-300 shadow-sm rounded-md w-full'>
              <div className='p-5 flex gap-4'>
                <button className={`${tab === "active" ? "text-indigo-600 font-medium text-sm border-b-2 border-b-indigo-600" : "text-slate-900 font-medium text-sm"} text-nowrap cursor-pointer`} onClick={()=>setSelectedTab("active")}>Active Members</button>
                <button className={`${tab === "pending" ? "text-indigo-600 font-medium text-sm border-b-2 border-b-indigo-600" : "text-slate-900 font-medium text-sm"} text-nowrap cursor-pointer` } onClick={()=>setSelectedTab("pending")}>Pending Invitations</button>
              </div>
              {tab === "active" ?<> <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] px-5 bg-slate-300/50 py-3 ">
                <span className='text-sm text-slate-900 font-medium'>Member</span>
                <span className='text-sm text-slate-900 font-medium'>Role/Position</span>
                <span className='text-sm text-slate-900 font-medium'>User Type</span>
                <span className='text-sm text-slate-900 font-medium text-left'>Action</span>
              </div>
             <TeamTable value={value}/>
             </>:
             <>
             <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] px-5 bg-slate-300/50 py-3 ">
                <span className='text-sm text-slate-900 font-medium'>Email</span>
                <span className='text-sm text-slate-900 font-medium'>User Type</span>
                <span className='text-sm text-slate-900 font-medium'>Invited By</span>
            
                <span className='text-sm text-slate-900 font-medium'>Sent on</span>
                <span className='text-sm text-slate-900 font-medium text-left'>Action</span>
              </div>
             <PendingTable/>
             </>
             }
              
             </div>

             {invite && (<InviteMember invite={invite} setInvite={setInvite} />)}
         
      </div>
    </div>
  )
}

export default Team
