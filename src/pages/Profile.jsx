import React, { useState } from 'react'
import ProfileNavbar from '../components/Profile/ProfileNavbar'
import ProfileCard from '../components/Profile/ProfileCard'
import PersonalInformation from '../components/Profile/PersonalInformation'
import currentUser from '../data/CurrentUser'
const Profile = () => {
      const [user , setUser] = useState(currentUser)
  return (
    <div className='w-full min-w-0 space-y-6 bg-slate-100'>
      <ProfileNavbar/>
      <ProfileCard user={user}/>
      <PersonalInformation user={user}/>
    </div>
  )
}

export default Profile
