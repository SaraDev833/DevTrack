import React from 'react'
import Navbar from '../components/Dashboard/Navbar'
import Kanban from '../components/Kanban'
import TaskOverViewChart from '../components/Dashboard/TaskOverViewChart'
import RecentProjects from '../components/Dashboard/RecentProjects'
import RecentActivity from '../components/Dashboard/RecentActivity'
import UpcomingDeadlines from '../components/Dashboard/UpcomingDeadlines'

const Dashboard = () => {
  return (
    <div className="w-full min-w-0 bg-slate-100">
      <Navbar />
      <Kanban />

      {/* Chart + Recent Projects */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 my-6 items-stretch">
        <TaskOverViewChart />
        <RecentProjects />
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
        <RecentActivity />
        <UpcomingDeadlines />
        <UpcomingDeadlines />
      </div>
    </div>
  )
}

export default Dashboard