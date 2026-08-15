import React, { useState } from 'react'

const Task = ({data , CompletedTasks , input}) => {

const [showAll , setShowAll] = useState(false);


  const recentTask = [...data]
  .filter((task)=> task.status !== "Completed")
  .sort((a, b)=> new Date(b.dueDate) - new Date (a.dueDate) );

 const filteredSearchTask = recentTask.filter((task)=>(
  task.title.toLowerCase().includes(input.toLowerCase())
 ))

  const displayedTasks = showAll ? filteredSearchTask : filteredSearchTask.slice(0,4);

  
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

  return (
    
<div className="bg-white border border-slate-200 shadow-sm p-4 rounded-md h-fit">
   <div className="title flex justify-between items-center w-full mb-3">
       <h2 className='text-sm font-bold text-slate-900 '>My Tasks</h2>
       <p className='text-sm text-indigo-600 font-medium cursor-pointer' onClick={()=>setShowAll(!showAll)}>{showAll ? "View Less" : "View All"}</p>
   </div>
  {displayedTasks.length !== 0 ?
   displayedTasks.map((task)=>(
<div className="flex justify-between items-center w-full gap-2 py-3 border-b border-slate-200 last:border-b-0">
    <div className='flex gap-3 items-center'>
      <input type="checkbox"  className="h-5 w-5 appearance-none rounded-full border border-indigo-600 checked:bg-indigo-200/50 cursor-pointer" onClick={()=>CompletedTasks(task.id)}/>
         <div className='flex flex-col mb-2 '>
            <h2 className='text-sm font-bold text-slate-900'>{task.title}</h2>
            <p className='text-slate-500 text-sm'>{task.projectName}</p>
          </div>
    </div>
       
          <div className='flex gap-3 items-center'>
               <p className='text-sm font-semibold text-slate-900'>{task.dueDate}</p>
               <span className={`${getPriorityColor(task.priority)} p-2 rounded-full text-xs font-medium`}>{task.priority}</span>
          </div>
     </div>

   )):
   <div>No Task</div>
   }
  
   {showAll ?"" : 
   <div className='flex justify-start w-full mt-3 '>
         <button onClick={()=>setShowAll(!showAll)} className='text-indigo-600 font-medium text-sm cursor-pointer'>View All Tasks</button>
     </div>}
     
    </div>
  )
}

export default Task
