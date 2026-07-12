import React from 'react'
import Navbar from '../components/Dashboard/Navbar'
import Kanban from '../components/Kanban'

const Dashboard = () => {
  return (
    <div className='w-full bg-slate-100'>
<Navbar/>
<Kanban/>
    </div>
  )
}

export default Dashboard
