import React from 'react'

const ProfileNavbar = () => {
  return (
     <header className="w-full min-w-0">
      <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
        {/* Left Side */}
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-950">
           My Profile
          </h1>

          <p className="mt-1 text-sm sm:text-base text-slate-500 max-w-2xl">
 Manage your profile information and account setting
          </p>
        </div>

  
   
      </div>
      
    </header> 
  )
}

export default ProfileNavbar
