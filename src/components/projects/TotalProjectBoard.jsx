
import { CheckCheck, ClipboardList, ClockFading } from 'lucide-react'
import React from 'react'

const TotalProjectBoard = ({ project }) => {
    return (
        <div className='space-y-3   grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className="p-6 grid grid-cols-[auto_1fr] gap-6 bg-white shadow-sm rounded-md items-center">
                <span className='p-3 bg-indigo-200/50 rounded-md h-fit w-fit'><ClipboardList size={28} className='text-indigo-600' /></span>
                <div className='flex flex-col gap-1.5'>
                    <h2 className='text-slate-700 font-medium'>Total Tasks</h2>
                    <p className='text-xl font-bold '>{project.tasks.length}</p>
                    <p className='text-slate-700 font-medium text-nowrap'>Across all columns</p>
                </div>
            </div>
            <div className='p-6 grid grid-cols-[auto_1fr] gap-6 bg-white rounded-md shadow-sm items-center'>
                <span className='p-3 bg-green-200/50 rounded-md h-fit w-fit'><CheckCheck size={28} className="text-green-600" /></span>
                <div className='flex flex-col gap-1.5'>
                    <h2 className='text-slate-700 font-medium'>Completed</h2>
                    <p className='text-xl font-bold '>{project.tasks.filter(task => task.status === "Completed").length}</p>
                    <p className='text-slate-700 font-medium text-nowrap'>{project.progress}% of total tasks</p>
                </div>
            </div>
            <div className='p-6 grid grid-cols-[auto_1fr] gap-6 bg-white rounded-md shadow-sm items-center'>
                <span className='p-3 bg-yellow-200/50 rounded-md h-fit w-fit'><ClockFading size={28} className="text-yellow-600" /></span>
                <div className='flex flex-col gap-1.5'>
                    <h2 className='text-slate-700 font-medium'>Pending</h2>
                    <p className='text-xl font-bold '>{project.tasks.filter(task => task.status === "In Progress").length}</p>
                    <p className='text-slate-700 font-medium text-nowrap'>{project.tasks.filter(task => task.status === "In Progress").length} pending</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default TotalProjectBoard
