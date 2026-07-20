import React from 'react'
import Navbar from '../common/Navbar'
import { CalendarDays, Laptop } from 'lucide-react'
import { useParams } from 'react-router-dom'
import projects from '../../data/ProjectData'

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => (
        p.id === Number(id)
    ))
    console.log(project)
    return (
        <div className='w-full min-w-0 bg-slate-100 space-y-6'>
            <Navbar title="Project Details" description="Track project progress , tasks and team activity" />
            <div className='space-y-3 bg-white rounded-md border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row'>
                <div className=' grid grid-cols-[0.2fr_1.8fr] gap-6 '>
                    <div className='bg-indigo-200/50 p-4 rounded-md w-fit h-fit inline'>
                        <Laptop className='text-indigo-600' size={28} />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-bold text-lg text-slate-900'>{project.name}</h2>
                        <p className='text-slate-700 text-sm'>{project.description}</p>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-3'>
                            <span className='text-xs font-medium text-slate-900'>Status:</span>
                            <span className={`p-1.5 font-medium text-xs rounded-md ${project.status === "In Progress" ? "text-indigo-600 bg-indigo-200/50" : `${project.status === "Planning" ? "text-yellow-600 , bg-yellow-200/50" : `${project.status === "Archived" ? "text-blue-600 bg-blue-200/50" : `${project.status === "On Hold" ? "bg-red-200/50 text-red-600" : "text-green-600 bg-green-200/50"}`}`}`}`}>{project.status}</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='text-xs font-medium text-slate-900'>Priority</span>
                               <span className={`p-1.5 font-medium text-xs rounded-md ${project.priority === "High" ? "text-red-600 bg-red-200/50" : `${project.priority === "Medium" ? "text-yellow-600 , bg-yellow-200/50" :"text-green-600 bg-green-200/50" }`}`}>{project.priority}</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span><CalendarDays size={20} className='text-indigo-600'/></span>
                                <span>{project.dueDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <hr />
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
