import React, { useState } from 'react'
import ProjectDivideTodoCard from './ProjectDivideTodoCard'
import Man1 from "../../assets/man-1.jfif"
import Man2 from "../../assets/man-2.jfif"
import Man3 from "../../assets/man-3.jfif"
import TaskModal from './TaskModal'
import projects from '../../data/ProjectData'
const ProjectDividetodo = ({project, onAddTask , isModalOpen , tasks, setIsModalOpen , onClose}) => {
    
  const [showAllTasks , setShowAllTasks] = useState(false);
  const lengthOfTasks = showAllTasks? tasks : tasks.slice(0,4);
  return (
    <div className='flex flex-col gap-4'>
        {lengthOfTasks.map((task)=>(
        <div key={task.id}>
    <ProjectDivideTodoCard  project={project} title={task.title} desc= {task.description} image= {Man1} priority={task.priority} date = {task.dueDate}/>
    </div>
        ))}
    <button onClick={()=>setIsModalOpen(true)} className='text-indigo-600 bg-white py-2 rounded-md font-medium text-sm cursor-pointer text-left px-3'>+ Add task</button>
   {tasks.length > 4 && (
     <button onClick={()=>setShowAllTasks(!showAllTasks)} className='text-white bg-indigo-600 text-center py-2 rounded-md font-medium text-sm cursor-pointer  px-3'> {showAllTasks ? "View Less" : `View More (${tasks.length - 4})`}</button>
   )} 
   
    {isModalOpen && <TaskModal closeModal={onClose} teamMembers = {project.teamMembers} project = {project} onAddTask={onAddTask}/>}
    </div>
  )
}

export default ProjectDividetodo
