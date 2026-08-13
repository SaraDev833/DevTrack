import React, { useContext, useState } from 'react'
import Navbar from '../../components/common/Navbar';
import { AuthContext } from '../../Context/AuthContext';
import Kanban from '../../components/employee/dashboard/Kanban';
import projects from '../../data/ProjectData'
const DashboardEmployee = () => {
  const {user} = useContext(AuthContext)
  const [data , setData] = useState(projects);

    
    const filterData = data.flatMap((project)=>(
        
      project.tasks?.filter((task)=>(
        task.assignedTo.toLowerCase().includes
        (user.name.toLowerCase())
      ))
      
    ));
    
    const inProgresstask = filterData?.filter((task)=>(
      task?.status === "In Progress"
    ))
  
    const completedTask = filterData?.filter((task)=>(
      task?.status === "Completed"
    ))
    
    const overDue = filterData?.filter((task)=>{
        const today  = new Date();
         today.setHours(0,0,0,0);
         const dueDate= new Date(task.dueDate);
         dueDate.setHours(0,0,0,0);
         return dueDate < today && task.status !== "Completed"
    })
  return (

    <div className="w-full min-w-0 bg-slate-100 space-y-6">
     <Navbar title="Dashboard" description={`Welcome back ${user.name}! Here's your work summary`}/>
    <Kanban user={user} filterData={filterData} inProgresstask={inProgresstask} completedTask={completedTask} overDue={overDue}/>
    </div>
  );
}

export default DashboardEmployee
