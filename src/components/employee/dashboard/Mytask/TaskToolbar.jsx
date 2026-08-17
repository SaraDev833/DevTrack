import { ArrowUpDown } from 'lucide-react';
import React, { useState } from 'react'

const TaskToolbar = () => {
    const [active , setActive] = useState("All");
    const tabs = [
        "All",
        "To Do",
        "In Progress",
        "Completed"
    ]
  return (
    <div className='w-full min-w-0 bg-white rounded-md p-4 flex justify-between items-center shadow-sm'>
       <div className='flex items-center gap-2'>
          {tabs.map((tab)=>(
            <React.Fragment key={tab}>
                 <button onClick={()=>setActive(tab)} className={`p-2 rounded-md border border-slate-200 shadow-xs font-medium cursor-pointer text-sm ${active=== tab?"bg-indigo-600 text-white": "bg-white text-slate-900"}`}>{tab}</button>
            </React.Fragment>
          ))}
       </div>
       <div>
        <select name="" id="" className='border border-slate-200 shadow-xs p-2 rounded-md text-sm cursor-pointer'>
            <option value="">Sort By : Due Date</option>
            <option value="" >Today</option>
            <option value="" >This Week</option>
            <option value="" >Next Week</option>
            <option value="" >Overdue</option>
        </select>
       </div>
    </div>
  )
}

export default TaskToolbar
