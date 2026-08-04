import { Settings } from 'lucide-react'
import React from 'react'

const NotifiNavbar = () => {
  return (
  <header className="w-full min-w-0">
      <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
        {/* Left Side */}
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-950">
         Notifications
          </h1>

          <p className="mt-1 text-sm sm:text-base text-slate-500 max-w-2xl">
  Stay updated with whats happening in your workspace
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full 2xl:w-auto flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
        
         <button className='py-1 px-4 border border-indigo-600 text-sm font-medium text-indigo-600 hover:text-white hover:bg-indigo-600 transition duration-75 cursor-pointer'>Mark all as read</button>
         <div className='p-1.5 rounded-md bg-indigo-600 text-white cursor-pointer'>
             <Settings  size={18} />
         </div>
        
          </div>

          {/* Actions */}
   
        
      </div>
      
    </header> 
  )
}

export default NotifiNavbar
