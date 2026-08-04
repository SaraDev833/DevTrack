import React, { useState } from 'react'
import TaskNavbar from '../components/Task/TaskNavbar'
import Kanban from '../components/Kanban'
import { useOutletContext } from 'react-router-dom'

const Task = () => {
    const { projects, setProjects } = useOutletContext();
    const [selectedTab, setSelectedTab] = useState("All Tasks")

    const tabs = [
        "All Tasks",
        "To Do",
        "In Progress",
        "Completed"
    ]
    return (
        <div className='w-full min-w-0 bg-slate-100 space-y-6'>
            <TaskNavbar />
            <Kanban projects={projects} setProjects={setProjects} />
            <div className='border border-slate-200 shadow-sm rounded-md w-full '>
                {/* tabs */}
                <div className='flex gap-10 p-4'>
                    {tabs.map((tab) => (
                        <React.Fragment key={tab}>
                            <button className={`${selectedTab === tab ? "text-indigo-600 border-b-2 border-b-indigo-600" : "text-slate-900"} text-sm font-medium `} onClick={() => setSelectedTab(tab)}>{tab}</button>
                        </React.Fragment>
                    ))}
                </div>
                {/* tabs */}
                <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] px-5 py-3 bg-slate-300/50'>
          <span className='text-sm text-slate-900 font-medium'>Task</span>
          <span className='text-sm text-slate-900 font-medium'>Project</span>
          <span className='text-sm text-slate-900 font-medium'>Assignee</span>
          <span className='text-sm text-slate-900 font-medium'>Priority</span>
          <span className='text-sm text-slate-900 font-medium'>Status</span>
          <span className='text-sm text-slate-900 font-medium'>Due Date</span>
          <span className='text-sm text-slate-900 font-medium'>Action</span>
                </div>
            </div>
        </div>
    )
}

export default Task
