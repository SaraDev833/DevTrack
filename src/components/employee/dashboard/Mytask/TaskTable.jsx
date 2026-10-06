import React, { useEffect, useState } from 'react'
import TaskModal from './TaskModal';
import axios from 'axios';
import { ClipboardPen } from 'lucide-react';

const  TaskTable = ({taskInfo, completedTask , searchInput , projects , setProjects, active}) => {
  const [currentPage , setCurrentPage] = useState(1);
  const [modelOpen , setModelOpen] = useState(false)
  
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
  const getStatus = (status) => {
  switch (status) {
    case "In Progress":
      return "text-blue-700 bg-blue-100 border-blue-200";

    case "Completed":
      return "text-green-700 bg-green-100 border-green-200";

    case "To Do":
      return "text-slate-700 bg-slate-100 border-slate-200";

    default:
      return "text-slate-700 bg-slate-100 border-slate-200";
  }
};
    useEffect(()=>{
     setCurrentPage(1)
    },[searchInput])
    const recentProjects = [...taskInfo].sort((a,b)=>(
          new Date(b.dueDate) - new Date (a.dueDate)
    ))
    const searchedTasks = recentProjects.filter((task)=>(
      task.title.toLowerCase().includes(searchInput.toLowerCase()) || task.projectName.toLowerCase().includes(searchInput.toLowerCase())
    ))
    const taskPerPage = 5;
    const totalPage = Math.ceil(taskInfo.length  / taskPerPage);
    const lastIndex = currentPage * taskPerPage;
    const firstIndex = lastIndex - taskPerPage;
    const currentTasks = searchedTasks.slice(firstIndex , lastIndex);

    const updateTaskStatus = async (taskId, newStatus) => {
      const token = localStorage.getItem("token");
      try {
         const response = await axios.put(`http://localhost:3000/api/update/taskStatus/${taskId}`,{
          newStatus,
         },{
          headers:{
            Authorization:`Bearer ${token}`
          }
         })
       

        //  update status frontend
        setProjects((previousProjects)=>{
        return  previousProjects.map((project)=>(
            {
              ...project,
              tasks:project.tasks.map((task)=>
                 task._id === taskId ? {
                  ...task,
                  status:newStatus
                 }:task
              )
            }
          ))
        })
         
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    
  
};
  return (
    <div className='w-full min-w-0 bg-white shadow-sm border-slate-200 border space-y-6'>
     
   <div className='grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_1fr_1fr] md:items-center md:px-5 md:py-4 bg-slate-50 border-b border-b-slate-300 hidden md:grid'>
        <span  className='text-sm font-medium text-slate-900'>Task</span>
        <span  className='text-sm font-medium text-slate-900'>Project</span>
        <span  className='text-sm font-medium text-slate-900'>Priority</span>
        <span  className='text-sm font-medium text-slate-900'>Status</span>
        <span  className='text-sm font-medium text-slate-900'>Due Date</span>
      </div>
        {
          currentTasks.length === 0? (
  <div className="flex flex-col items-center justify-center py-16 text-gray-400">
    <div className="mb-3"><ClipboardPen size={24}/></div>
    <h3 className="text-lg font-semibold text-gray-600">
      No tasks here
    </h3>
    <p className="text-sm text-gray-400 mt-1">
      You don't have any {active} tasks yet.
    </p>
  </div>

          ):( currentTasks.map((task)=> (
      <div className='grid grid-cols-1 gap-5 md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center p-3 border-b border-b-slate-200 last:border-b-0'>
         {modelOpen && (<TaskModal taskName={task.title} description={task.description} setModelOpen={setModelOpen}/>)}
              <React.Fragment key={task.id} >
                <div  onClick={()=>setModelOpen(!modelOpen)}>
                       <span className='flex gap-1.5 items-center cursor-pointer'>
                
                <div className='flex flex-col gap-1'>  
                  <h6 className='text-sm font-medium text-slate-900'><span className='md:hidden'>Task: </span>{task.title}</h6> 
                 <p className='text-sm font-medium text-slate-500 truncate max-w-xs'><span className='md:hidden'>Description: </span>{task.description.length > 25 ? task.description.slice(0,25)+ "..." : task.description}</p>
                </div>
           
              </span>
                </div>
         <div>
                 <span  className='text-sm font-medium text-indigo-600'>
               <span className='md:hidden'>Project Name : </span> {task.projectName}
              </span>
         </div>
       
              <div>
                <span className='md:hidden text-sm font-medium'>Priority :</span>
                   <span  className={`${getPriority(task.priority)} p-2 rounded-md text-sm font-medium`}>{task.priority}</span>
              </div>
           <div>
  <span className='md:hidden text-sm font-medium'>Status: </span>

  <div className="relative inline-block">
    <select
      value={task.status}
      onChange={(e) => updateTaskStatus(task._id, e.target.value)}
      className={`
        appearance-none
        cursor-pointer
        rounded-full
        px-3 py-1.5 pr-8
        text-xs font-semibold
        border outline-none
        ${getStatus(task.status)}
      `}
    >
      <option value="Todo">To Do</option>
      <option value="In-progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>

    <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
      ▾
    </span>
  </div>
</div>
            <div>
                            <span  className={`${new Date(task.dueDate).setHours(0,0,0,0) > new Date().setHours(0,0,0,0) ? "text-red-600": "text-slate-900"} font-medium text-sm `}>
                            <span className='md:hidden'>Due Date: </span>{new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
 
              </React.Fragment>
      </div>
            )))
        }
            {/* pagination */}
            <div className='flex justify-center gap-2 my-6 flex-wrap'>
         {[...Array(totalPage)].map((_, index)=>(
          <button
          key={index}
          onClick={()=>setCurrentPage(index+ 1)}
          className={`${currentPage === index + 1 ? "text-white bg-indigo-600 ":"text-slate-900 bg-white border border-slate-900"} py-1 px-3 rounded-md transition cursor-pointer`}
          >
            {index + 1}
          </button>
         ))}
            </div>
    </div>
  )
}

export default TaskTable
