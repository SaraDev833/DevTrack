import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-100 flex">
         <Sidebar/>
         <main className='flex-1 p-6'>
   <Outlet/>
         </main>
      </div>
    </div>
  )
}

export default DashboardLayout
