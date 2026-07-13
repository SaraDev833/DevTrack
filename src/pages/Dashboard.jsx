import React from 'react'
import Navbar from '../components/Dashboard/Navbar'
import Kanban from '../components/Kanban'
import TaskOverViewChart from '../components/Dashboard/TaskOverViewChart'

const Dashboard = () => {
  return (
    <div className='w-full bg-slate-100'>
<Navbar/>
<Kanban/>
<div className='flex justify-between '>
  <div className='w-1/2 my-6'>
     <TaskOverViewChart/>
  </div>

</div>
    </div>
  )
}

export default Dashboard
