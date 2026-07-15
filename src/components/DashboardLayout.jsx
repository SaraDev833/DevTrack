import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-100 flex">
         <Sidebar/>
         <main className='p-6 flex-1 min-w-0 overflow-x-hidden'>
   <Outlet/>
         </main>
      </div>
    </div>
  )
}

export default DashboardLayout
