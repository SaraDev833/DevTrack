import React, { useState } from 'react'
import ProjectDivideTodoCard from './ProjectDivideTodoCard'
import Man1 from "../../assets/man-1.jfif"
import Man2 from "../../assets/man-2.jfif"
import Man3 from "../../assets/man-3.jfif"
import TaskModal from './TaskModal'
import projects from '../../data/ProjectData'
const ProjectDividetodo = ({project}) => {
   
    const [isModalOpen , setIsModalOpen] = useState(false)
 
     const onClose=()=>{
       setIsModalOpen(false)
     }
  return (
    <div className='flex flex-col gap-4'>
        {project.tasks.map((task)=>(
    <ProjectDivideTodoCard project={project} title={task.title} desc= {task.description} image= {Man1} priority={task.priority} date = {task.dueDate}/>
        ))}
  
    <button onClick={()=>setIsModalOpen(true)} className='text-indigo-600 bg-white py-2 rounded-md font-medium text-sm cursor-pointer text-left px-3'>+ Add task</button>
    {isModalOpen && <TaskModal closeModal={onClose} teamMembers = {project.teamMembers}/>}
    </div>
  )
}

export default ProjectDividetodo
