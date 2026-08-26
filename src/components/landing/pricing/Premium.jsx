import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Premium = () => {
   const lists=[
        "Unlimited projects",
        "Advanced reports",
        "Team analysis"
    ]
   return (
    <div className='p-6 bg-white rounded-md flex flex-col border border-slate-200 '>
        <h6 className='text-sm text-slate-500 font-bold'>Premium</h6>
        <p className='text-sm text-slate-900 font-medium'><span className='text-slate-900 text-2xl font-bold '>$12</span>/month</p>
        <ul className='flex flex-col gap-2 mt-2'>
            {lists.map((list)=>(
                <div key={list} className='flex items-center gap-2'>
                    <CircleCheckBig  size={12} className='text-indigo-600'/>
               <li className='text-slate-600 font-medium text-sm'>
                        {list}
               </li>
               </div>
            ))}
        </ul>
        <button className='bg-linear-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white  py-1 px-3 text-xs  font-medium cursor-pointer  text-center rounded-lg mt-3' >Coming soon </button>
    </div>
  )
  
}

export default Premium
