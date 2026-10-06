import React, { act, useContext, useEffect, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import TaskToolbar from '../../components/employee/dashboard/Mytask/TaskToolbar'
import TaskTable from '../../components/employee/dashboard/Mytask/TaskTable'
import { AuthContext } from '../../Context/AuthContext'
import axios from 'axios'
const TaskEmployee = () => {
    const {user} = useContext(AuthContext)
     const [active , setActive] = useState("Todo");
     const [searchInput , setSearchInput] = useState("");
     const [projects , setProjects]= useState([])

useEffect(()=>{
const token = localStorage.getItem("token");
const projects = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/api/my/projects",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    setProjects(response.data.projects)
  } catch (error) {
    console.log(error.response?.data?.message)
  }
}
projects()
},[])

    const filterData =user._id? projects.flatMap((project) => (
    project.tasks
      ?.filter((task) => (
       task.assignedTo?.toString() === user?._id?.toString() && task?.status === active
      ))
      .map((task) => ({
        ...task,
        projectName: project.name,
        projectId: project._id
      }))

  )):[];

  const completedTask=(id)=>{
  const updatedProject = data.map((project)=>({
    ...project,
    tasks:project.tasks?.map((task)=>(
      task.id === id && task.assignedTo.toLowerCase() === user.name ? {
        ...task,
        status:"Completed"
      }: task
    ))
  }))
  setData(updatedProject)
  }
 const searchedValue=(value)=>{
  setSearchInput(value)
 }
  return (
    <div className='w-full min-w-0 space-y-6  bg-slate-100'>
      <Navbar title="My Tasks" description="Tasks assigned to you acrossed all pages" searchedValue={searchedValue}/>
      <TaskToolbar setActive={setActive} active={active}/>
      <TaskTable taskInfo = {filterData} completedTask={completedTask} searchInput={searchInput} setProjects={setProjects} projects={projects} active={active}/>
    </div>
  )
}

export default TaskEmployee
