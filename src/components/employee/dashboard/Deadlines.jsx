import React, { useState } from 'react'

const Deadlines = ({upcoming , input}) => {
 
  const[showAll , setShowAll] = useState(false);
  const getPriorityColor = (prioriy)=>{
         switch(prioriy){
          case "High":
            return "bg-red-200/50 text-red-600"
            case "Medium":
              return "bg-yellow-200/50 text-yellow-600";
              default:
                return "bg-green-200/50 text-green-600";
         }
  }
  const filteredSearchTask = upcoming.filter((task)=>(
    task.title.toLowerCase().includes(input.toLowerCase()) || task.projectName.toLowerCase().includes(input.toLowerCase())
  ))
  const display = showAll ? filteredSearchTask : filteredSearchTask.slice(0,3)
  return (
<div className="bg-white border border-slate-200 shadow-sm p-4 rounded-md h-fit">
   <div className="title flex justify-between items-center w-full mb-3">
       <h2 className='text-sm font-bold text-slate-900 '>Upcoming Deadlines</h2>
       <p className='text-sm text-indigo-600 font-medium cursor-pointer' onClick={()=>setShowAll(!showAll)}>{showAll ? "View Less" : "View All"}</p>
   </div>
   {display.map((task)=>(
<div className="flex justify-between items-center w-full gap-2 py-3 border-b border-slate-200 last:border-b-0">

    <div className='flex gap-3 items-center'>
    
         <div className='flex flex-col mb-2 '>
            <h2 className='text-sm font-bold text-slate-900'>{task.title}</h2>
            <p className='text-slate-500 text-sm'>{task.projectName}</p>
          </div>
    </div>
       
          <div className='flex gap-3 items-center'>
               <p className='text-sm font-semibold text-slate-900'>{task.dueDate}</p>
               <span className={`${getPriorityColor(task.priority)} p-2 rounded-full text-xs font-medium`} >{task.priority}</span>
          </div>
     </div>
   ))}


     
    </div>
  )
}

export default Deadlines
