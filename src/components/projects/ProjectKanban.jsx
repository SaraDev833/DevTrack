import React from 'react'

import Man1 from "../../assets/man-1.jfif"
import Man2 from "../../assets/man-2.jfif"
import Man3 from "../../assets/man-3.jfif"

import { CalendarDays, Laptop } from 'lucide-react'
const ProjectKanban = ({project}) => {
  return (
     <div className='space-y-3 bg-white rounded-md shadow-sm p-6 grid grid-cols-1 md:grid-cols-2'>
                <div className=' grid grid-cols-[auto_1fr] w-fit gap-10 place-items-center md:border-r md:border-r-slate-200 md:border-b-0 border-b md:pr-8 border-b-slate-200 pb-8 lg:pb-0'>
                    <div className='bg-indigo-200/50 p-4 rounded-md w-fit h-fit inline'>
                        <Laptop className='text-indigo-600' size={28} />
                    </div>
                    <div className='flex flex-col gap-3 items-start justify-start'>
                        <h2 className='font-bold text-lg text-slate-900'>{project.name}</h2>
                        <p className='text-slate-700 text-sm text-nowrap'>{project.description}</p>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <span className='text-xs font-medium text-slate-900'>Status:</span>
                                <span className={`p-1.5 font-medium text-xs rounded-md ${project.status === "In Progress" ? "text-indigo-600 bg-indigo-200/50" : `${project.status === "Planning" ? "text-yellow-600 , bg-yellow-200/50" : `${project.status === "Archived" ? "text-blue-600 bg-blue-200/50" : `${project.status === "On Hold" ? "bg-red-200/50 text-red-600" : "text-green-600 bg-green-200/50"}`}`}`}`}>{project.status}</span>
                            </div>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <span className='text-xs font-medium text-slate-900 '>Priority</span>
                                <span className={`p-1.5 font-medium text-xs rounded-md ${project.priority === "High" ? "text-red-600 bg-red-200/50" : `${project.priority === "Medium" ? "text-yellow-600 , bg-yellow-200/50" : "text-green-600 bg-green-200/50"}`}`}>{project.priority}</span>
                            </div>
                            <div className='flex items-center gap-3 flex-wrap'>
                                <span><CalendarDays size={20} className='text-indigo-600' /></span>
                                <span>{project.dueDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 w-full p-6'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-slate-900 '>Progress</span>
                        <div className='flex items-center gap-4 '>
                            <span className='order-2'>{project.progress}%</span>
                            <div className="h-1.5 bg-slate-500/10 rounded-full w-full overflow-hidden">
                                <div
                                    className="h-full bg-indigo-500 rounded-full"
                                    style={{ width: `${project.progress}%` }}
                                > </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-slate-900 '>Team</span>
                           <div className='h-10 w-10 rounded-full flex relative'>
                            <img src={Man1} alt=""className='h-full absolute z-1 w-full rounded-full object-cover object-top left-0' />
                            <img src={Man2} alt=""className='h-full w-full rounded-full object-cover absolute z-2 object-top left-8' />
                            <img src={Man3} alt=""className='h-full w-full rounded-full object-cover object-top absolute z-3 left-16' />
                            <span className='left-24 absolute h-10 w-10 bg-slate-200 rounded-full z-4 border-white flex items-center justify-center font-medium'>+2</span>
                           </div>
                    </div>
                </div>
            </div>
  )
}

export default ProjectKanban
