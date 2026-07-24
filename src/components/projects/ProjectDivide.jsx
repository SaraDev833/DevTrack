import React, { useState } from 'react'
import ProjectDividetodo from './ProjectDividetodo'
import ProjectDivideInProgress from './ProjectDivideInProgress';
import ProjectDivideCompleted from './ProjectDivideCompleted';
import ProjectInfo from './ProjectInfo';

const ProjectDivide = ({project}) => {
    const [tasks, setTasks ] = useState(project.tasks);
  
    const [isModalOpen , setIsModalOpen] = useState(false)
 
     const onClose=()=>{
       setIsModalOpen(false)
     }
     const handleAddTasks = (newTask) =>{
      setTasks([newTask,...tasks])
      setIsModalOpen(false)
     }
     
  return (
      <div className=' grid gap-6' style={{gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))"}}>
       <div className='card bg-slate-100 rounded-md shadow-sm p-3 border border-slate-200'>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>All tasks<span className='h-6 w-6 text-xs rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center'>{project.tasks.length}</span></h3>
        <ProjectDividetodo project={project} isModalOpen={isModalOpen} onAddTask = {handleAddTasks} tasks = {tasks} setIsModalOpen={setIsModalOpen} onClose={onClose}/>
        </div>
       </div>
       <div className='card bg-indigo-100/10 rounded-md shadow-sm p-3 border border-slate-200'>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>In Progress <span className='h-6 w-6 text-xs rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center'>0</span></h3>
        </div>
        <ProjectDivideInProgress />
       </div>
       <div className='card bg-green-100/10 rounded-md shadow-sm p-3 border border-slate-200'>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>Completed <span className='h-6 w-6 text-xs rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center'>0</span></h3>
        </div>
        <ProjectDivideCompleted />
       </div>
       <div>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>Project Info</h3>
        </div>
        <ProjectInfo/>
       </div>
      
    </div>
  )
}

export default ProjectDivide
