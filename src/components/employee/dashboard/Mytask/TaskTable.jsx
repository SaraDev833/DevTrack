import React from 'react'

const TaskTable = ({taskInfo, completedTask}) => {
    const getPriority=(priority)=>{
      switch(priority){
        case "High":
          return "text-red-600 bg-red-200/50";
          case "Medium":
            return "text-yellow-600 bg-yellow-200/50";
            default:
              return "text-green-600 bg-green-200/50"
      }

    }
    const getStatus=(status)=>{
      switch(status){
        case "In Progress":
          return "text-blue-600 bg-blue-200/50";
          case "To Do":
            return "text-slate-900 bg-slate-200/50";
            default:
              return "text-green-600 bg-green-200/50"
      }

    }

    
  return (
    <div className='w-full min-w-0 bg-white shadow-sm border-slate-200 border space-y-6'>
   <div className='grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center px-5 py-4 bg-slate-50 border-b border-b-slate-300'>
        <span  className='text-sm font-medium text-slate-900'>Task</span>
        <span  className='text-sm font-medium text-slate-900'>Project</span>
        <span  className='text-sm font-medium text-slate-900'>Priority</span>
        <span  className='text-sm font-medium text-slate-900'>Status</span>
        <span  className='text-sm font-medium text-slate-900'>Due Date</span>
      </div>
            {taskInfo.map((task)=>{
             
              return (
      <div className='grid grid-cols-1  md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center p-3 border-b border-b-slate-200 last:border-b-0'>
              <React.Fragment key={task.id}>
                <div>
                       <span className='flex gap-1.5 items-center '>
                <div>  <input type="checkbox" className='accent-indigo-600' onChange={()=>completedTask(task.id)}/></div>
                <div className='flex flex-col gap-1'>  
                  <h6 className='text-sm font-medium text-slate-900'>{task.title}</h6> 
                 <p className='text-sm font-medium text-slate-500 truncate max-w-xs'>{task.description}</p>
                </div>
           
              </span>
                </div>
         <div>
                 <span  className='text-sm font-medium text-indigo-600'>
                {task.projectName}
              </span>
         </div>
       
              <div>
                   <span  className={`${getPriority(task.priority)} p-2 rounded-md text-sm font-medium`}>{task.priority}</span>
              </div>
             <div>
                <span className={`${getStatus(task.status)} p-2 rounded-md text-sm font-medium`}>{task.status}</span>
             </div>
            <div>
                            <span  className={`${new Date(task.dueDate).setHours(0,0,0,0) > new Date().setHours(0,0,0,0) ? "text-red-600": "text-slate-900"} font-medium text-sm `}>{task.dueDate}</span>
            </div>
 
              </React.Fragment>
      </div>
            )})}
    </div>
  )
}

export default TaskTable
