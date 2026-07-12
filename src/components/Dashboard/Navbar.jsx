import { Bell, Plus, Search } from 'lucide-react'
import manImg from "../../assets/man-1.jfif"
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex w-full !justify-between items-center'>
            <div>
                <h1 className='text-3xl font-medium'>Dashboard</h1>
                <span className='text-slate-600 text-lg text-nowrap'>Welcome back, Sakib ! here's whats happening with your projects</span>
            </div>
            <div className='flex items-center w-full justify-end gap-7'>
                <div className='relative'>
                    <Search className='absolute top-1/2 left-2 -translate-y-1/2 text-slate-500' size={18} />
                    <input type="text" className='border py-2 px-9 rounded-full outline-none focus:ring-1 focus:ring-indigo-300' placeholder='Search projects,tasks..' />
                </div>
                <button className='py-2 px-4 bg-indigo-600 text-white rounded-md flex items-center justify-center gap-0.5'>
                    New Tasks <Plus />
                </button>
                <div className='relative inline-block'>
                    <Bell className='w-7 h-7' />
                    <div className="notification w-5 h-5 bg-red-600 text-white rounded-full absolute -top-2 -right-2 flex items-center justify-center text-xs font-medium">12</div>
                </div>
                <div><img src={manImg} className='h-10 w-10 rounded-full object-cover' alt="" /></div>
            </div>
        </div>
    )
}

export default Navbar
