import React, { useContext, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import TaskToolbar from '../../components/employee/dashboard/Mytask/TaskToolbar'
import TaskTable from '../../components/employee/dashboard/Mytask/TaskTable'
import projects from '../../data/ProjectData'
import { AuthContext } from '../../Context/AuthContext'
const TaskEmployee = () => {
    const [data, setData] = useState(projects);
    const {user} = useContext(AuthContext)
    const filterData = data.flatMap((project) => (
    project.tasks
      ?.filter((task) => (
        task.assignedTo.toLowerCase().includes
          (user.name.toLowerCase())
      ))
      .map((task) => ({
        ...task,
        projectName: project.name,
        projectId: project.id
      }))

  ));
  console.log(filterData)
  const completedTask=(id)=>{
  const updatedProject = data.map((project)=>({
    ...project,
    tasks:project.tasks?.map((task)=>(
      task.id === id && task.assignedTo.toLowerCase() === user.name.toLowerCase() ? {
        ...task,
        status:"Completed"
      }: task
    ))
  }))
  setData(updatedProject)
  }

  return (
    <div className='w-full min-w-0 space-y-6  bg-slate-100'>
      <Navbar title="My Tasks" description="Tasks assigned to you acrossed all pages"/>
      <TaskToolbar/>
      <TaskTable taskInfo = {filterData} completedTask={completedTask}/>
    </div>
  )
}

export default TaskEmployee
