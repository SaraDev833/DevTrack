import React from 'react'
import Navbar from '../components/Dashboard/Navbar'
import Kanban from '../components/Kanban'
import TaskOverViewChart from '../components/Dashboard/TaskOverViewChart'
import RecentProjects from '../components/Dashboard/RecentProjects'
import RecentActivity from '../components/Dashboard/RecentActivity'
import UpcomingDeadlines from '../components/Dashboard/UpcomingDeadlines'

const Dashboard = () => {
  return (
    <div className='w-full bg-slate-100'>
<Navbar/>
<Kanban/>
<div className='flex justify-between  my-6 gap-6 items-stretch'>
  <div className='w-1/2'>
     <TaskOverViewChart/>
  </div>
 <div className='w-1/2'> 
      <RecentProjects/>
 </div>
</div>
<div className='flex justify-between items-center w-full'>
      <div className='w-1/3'>
        <RecentActivity/>
      </div>
      <div className='w-1/3'>
        <UpcomingDeadlines/>
      </div>
      <div className='w-1/3'>
        <UpcomingDeadlines/>
      </div>
</div>
    </div>
  )
}

export default Dashboard
