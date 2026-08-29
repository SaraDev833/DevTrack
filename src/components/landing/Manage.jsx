import { MoveRight, Rocket } from 'lucide-react'
import React from 'react'

const Manage = () => {
  return (
    <div className='p-6 bg-linear-to-r from-indigo-700 via-indigo-500 to-purple-700   grid grid-cols-1 md:grid-cols-[1fr_1fr] mt-8 rounded-md shadow-sm gap-6'>
       <div className='flex items-center gap-3 '>
        <Rocket size={30} className='text-white'/>
        <div className="title flex flex-col ">
            <h2 className='text-xl text-slate-200 font-bold'>Ready to manage your team better?</h2>
            <p className='text-sm text-slate-200 font-medium'>Start building your workspace today</p>
        </div>
       </div>
       <div className='md:justify-self-end md:self-center'>
        <button className="bg-slate-200 text-slate-900 rounded-md px-3 py-1 text-sm font-semibold cursor-pointer flex gap-2 items-center md:justify-self-end justify-center">Get Started Free
            <MoveRight />
        </button>
       </div>
    </div>
  )
}

export default Manage
