import { Calendar } from 'lucide-react';
import React from 'react'


const ProjectDivideTodoCard = ({  title , desc, image , date, priority}) => {
    const getPriorityColor = (priority)=>{
        switch (priority){
            case "High":
                return "text-red-600 bg-red-200/50";
            case "Medium":
                return "text-yellow-600 bg-yellow-200/50";
            case "Low":
                return "text-green-600 bg-green-200/50"
        }
    }
  return (
    <div className='p-3 border border-slate-200 shadow-sm rounded-md bg-white flex flex-col gap-3'>
       <h3 className="title text-sm font-bold text-slate-900 ">{title}</h3>
       <p className='text-sm text-slate-600'>{desc}</p>
       <div className='flex items-center justify-between'>
          <span className={`px-2 py-1 text-xs rounded-md font-medium ${getPriorityColor(priority)}`}>{priority}</span>
          <span className='flex items-center gap-1'><Calendar size={18} className='text-slate-600'/><span className='text-slate-600 text-xs'>{date}</span></span>
          <div className='h-10 w-10 rounded-full overflow-hidden'><img className='h-full w-full object-cover object-top' src={image} alt="" /></div>
       </div>
    </div>
  )
}

export default ProjectDivideTodoCard
