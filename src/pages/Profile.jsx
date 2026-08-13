import React, { useState } from 'react'
import ProfileNavbar from '../components/Profile/ProfileNavbar'
import ProfileCard from '../components/Profile/ProfileCard'
import PersonalInformation from '../components/Profile/PersonalInformation'
import currentUser from '../data/CurrentUser'
import WorkInformation from '../components/Profile/WorkInformation'
import EditProfile from '../components/Profile/EditProfile'
import ChangePasswordModel from '../components/Profile/ChangePasswordModel'
const Profile = () => {
      const [user , setUser] = useState(currentUser)
      const [editProfileModal , setEditProfileModal] = useState(false);
    const[passModel , setPassModel] = useState(false);

      return (
        <div className='w-full min-w-0 space-y-6 bg-slate-100'>
      {editProfileModal && (<EditProfile user={user} setEditProfileModal={setEditProfileModal} setUser={setUser}/>)}
      {passModel && (<ChangePasswordModel/>)}
      <ProfileNavbar/>
      <ProfileCard user={user} editProfileModal={editProfileModal} setEditProfileModal={setEditProfileModal}/>
      <PersonalInformation user={user}/>
      <WorkInformation user={user}/>
      <div className='flex justify-end '>
        <button  className='px-2 py-1 border rounded-md hover:bg-indigo-500 hover:text-white border-indigo-600 text-sm text-indigo-600  font-medium text-right transition cursor-pointer' onClick={()=>setPassModel(!passModel)}>Change Password</button>
      </div>
    </div>
  )
}

export default Profile
