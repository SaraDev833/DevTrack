import { ArrowUpDown } from 'lucide-react';
import React, { useState } from 'react'

const TaskToolbar = ({setActive , active}) => {
   
    const tabs = [
        "All",
        "To Do",
        "In Progress",
        "Completed"
    ]
  return (
    <div className='w-full min-w-0 bg-white rounded-md p-4 shadow-sm'>
       <div className='flex items-center gap-2'>
          {tabs.map((tab)=>(
            <React.Fragment key={tab}>
                 <button onClick={()=>setActive(tab)} className={`p-2 rounded-md border border-slate-200 shadow-xs font-medium cursor-pointer text-sm ${active=== tab?"bg-indigo-600 text-white": "bg-white text-slate-900"}`}>{tab}</button>
            </React.Fragment>
          ))}
       </div>

    </div>
  )
}

export default TaskToolbar
