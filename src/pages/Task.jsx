import React, { useState } from 'react'
import TaskNavbar from '../components/Task/TaskNavbar'
import Kanban from '../components/Kanban'
import { useOutletContext } from 'react-router-dom'
import TaskTable from '../components/Task/TaskTable'

const Task = () => {
    const { projects, setProjects } = useOutletContext();
    const [selectedTab, setSelectedTab] = useState("All Tasks")
    const [value , setValue] = useState("");

    const tabs = [
        "All Tasks",
        "To Do",
        "In Progress",
        "Completed"
    ]
    const searchedValue = (value) =>{
        setValue(value);
    }
    return (
        <div className='w-full min-w-0 bg-slate-100 space-y-6'>
            <TaskNavbar searchedValue ={searchedValue}/>
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
               
          <TaskTable projects = {projects} selectedTab = {selectedTab} setProjects={setProjects} setSelectedTab={setSelectedTab} value={value} setValue = {setValue}/>
            </div>
            
        </div>
    )
}

export default Task
