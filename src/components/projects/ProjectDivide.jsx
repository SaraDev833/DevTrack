import React, { useState } from 'react'
import ProjectDividetodo from './ProjectDividetodo'
import ProjectInfo from './ProjectInfo';

const ProjectDivide = ({ project, tasks }) => {
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const[isTaskEditModalOpen, setIsTaskEditModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false)
  }
  
  const handleUpdate= (updateTask)=>{
    setTasks([updateTask , ...tasks])
    setIsTaskEditModalOpen(false)
  }
  const handleAddTasks = (newTask) => {
    setTasks([newTask, ...tasks])
    setIsModalOpen(false)
  }

  return (
    <div className=' grid gap-6' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))" }}>
      <div className='card bg-slate-100 rounded-md shadow-sm p-3 border border-slate-200'>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>All tasks<span className='h-6 w-6 text-xs rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center'>{tasks?.length}</span></h3>
          <ProjectDividetodo project={project} isModalOpen={isModalOpen} onAddTask={handleAddTasks} tasks={tasks} setIsModalOpen={setIsModalOpen} onClose={onClose} isTaskEditModalOpen={isTaskEditModalOpen} setIsTaskEditModalOpen={setIsTaskEditModalOpen} handleUpdate={handleUpdate}/>
        </div>
      </div>
  
      <div className='rounded-md shadow-sm p-3 border border-slate-200 bg-white flex flex-col'>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>Project Info</h3>
        </div>
        <ProjectInfo project={project} />
      </div>

    </div>
  )
}

export default ProjectDivide
