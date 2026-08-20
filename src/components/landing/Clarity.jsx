import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Clarity = () => {
  return (
    <div className='py-10 bg-linear-to-r from-purple-200/50 to-indigo-200/50 grid grid-cols-1 md:grid-cols-[0.7fr_1.2fr] shadow-sm my-6'>
        <div className='flex flex-col items-center justify-center'>
       <h2 className='text-lg font-bold text-slate-900'>Built for teams who want clarity</h2>
       <p className='text-sm text-slate-500 font-medium'>Manage Everything from one dashboard</p>
        </div>
        <div className='flex flex-wrap items-center gap-4 px-4 md:px-0 py-4 md:py-0'>
          <div className='flex items-center gap-2 '>
          <CircleCheckBig size={16} className='text-indigo-600'/>
          <div className='flex flex-col gap-1'>
       <h2 className='text-sm font-bold text-slate-900'>See projects progress</h2>
       <p className='text-sm font-medium text-slate-500 m-0'>Get a clear overview of projects progress and status</p>
          </div>
          </div>
          <div className='flex items-center gap-2 '>
          <CircleCheckBig size={16} className='text-indigo-600'/>
          <div className='flex flex-col gap-1'>
       <h2 className='text-sm font-bold text-slate-900'>Monitor team workload</h2>
       <p className='text-sm font-medium text-slate-500 m-0'>Understand capacity and balance tasks</p>
          </div>
          </div>
          <div className='flex items-center gap-2 '>
          <CircleCheckBig size={16} className='text-indigo-600'/>
          <div className='flex flex-col gap-1'>
       <h2 className='text-sm font-bold text-slate-900'>Track deadlines</h2>
       <p className='text-sm font-medium text-slate-500 m-0'>Never miss a deadline again</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Clarity
