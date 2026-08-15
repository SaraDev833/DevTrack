import React, { useContext, useState } from 'react'
import Navbar from '../../components/common/Navbar';
import { AuthContext } from '../../Context/AuthContext';
import Kanban from '../../components/employee/dashboard/Kanban';
import projects from '../../data/ProjectData'
import Task from '../../components/employee/dashboard/Task';
import MyProjects from '../../components/employee/dashboard/MyProjects';
import Deadlines from '../../components/employee/dashboard/Deadlines';
const DashboardEmployee = () => {
  const { user } = useContext(AuthContext)
  const [data, setData] = useState(projects);
  const[input , setInput] = useState("");
  const CompletedTasks = (id) => {
    const updatedProjects = data.map((project) => ({
      ...project,
      tasks: (project.tasks || []).map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task)
    }))
    setData(updatedProjects);
  }

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

  const ProjectInfo = data
    .filter((project) => (
      project.teamMembers.includes(user.name)
    ))
    .map((project) => {
      const mytasks = (project.tasks || []).filter((task) => (
        task.assignedTo.toLowerCase().includes(user.name.toLowerCase())
      ));
      const completed = mytasks.filter((task) => (
        task.status === "Completed"
      ))
      const percentage = completed.length / mytasks.length * 100;
      return {
        projectId: project.id,
        projectName: project.name,
        percentage: percentage
      }
    })




  const inProgresstask = filterData?.filter((task) => (
    task?.status === "In Progress"
  ))

  const completedTask = filterData?.filter((task) => (
    task?.status === "Completed"
  ))

  const overDue = filterData?.filter((task) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && task.status !== "Completed"
  })
  const upcoming = filterData?.filter((task) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate > today && task.status !== "Completed"
  }).sort((a, b) => (
    new Date(b.dueDate) - new Date(a.dueDate)
  ))


 const searchedValue=(value)=>{
   setInput(value);
 }

 
  return (

    <div className="w-full min-w-0 bg-slate-100 space-y-6">
      <Navbar title="Dashboard" description={`Welcome back ${user.name}! Here's your work summary`} searchedValue={searchedValue} />
      <Kanban user={user} filterData={filterData} inProgresstask={inProgresstask} completedTask={completedTask} overDue={overDue} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <Task data={filterData} CompletedTasks={CompletedTasks} input = {input}/>
        <div className='grid grid-rows-2 gap-3'>
          <MyProjects ProjectInfo={ProjectInfo} input={input} />
          <Deadlines upcoming={upcoming} input={input}/>
        </div>
      </div>
    </div>
  );
}

export default DashboardEmployee
