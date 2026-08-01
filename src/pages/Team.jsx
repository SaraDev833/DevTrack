import React, { useState } from 'react'
import TeamNavbar from '../components/Team/TeamNavbar'
import TeamTable from '../components/Team/TeamTable'
import InviteMember from '../components/Team/InviteMember'
import { useOutletContext } from 'react-router-dom'

const Team = () => {
  const {invite} = useOutletContext()
  return (
     <div className="w-full min-w-0 bg-slate-100 space-y-6">
      <TeamNavbar/>
      <div className='flex justify-between'>
             <TeamTable/>
             {invite && (    <InviteMember/>)}
         
      </div>
    </div>
  )
}

export default Team
