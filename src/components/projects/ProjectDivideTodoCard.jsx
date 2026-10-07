import { Calendar, SquarePen, Trash2 } from 'lucide-react';
import React from 'react'
import EditTaskModal from './EditTaskModal';


const ProjectDivideTodoCard = ({ task}) => {
  
    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "text-red-600 bg-red-200/50";
            case "Medium":
                return "text-yellow-600 bg-yellow-200/50";
            case "Low":
                return "text-green-600 bg-green-200/50"
        }
    }
    
    return (
        <div className='p-3 border border-slate-200 shadow-sm rounded-md bg-white flex flex-col gap-3'>
          
            <h3 className="title text-sm font-bold text-slate-900 ">{task.title}</h3>
            <p className='text-sm text-slate-600'>{task.description}</p>
            <div className='flex items-center justify-between'>
                <span className={`px-2 py-1 text-xs rounded-md font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                <span className='flex items-center gap-1'><Calendar size={18} className='text-slate-600' /><span className='text-slate-600 text-xs'>{new Date(task.dueDate).toLocaleDateString()}</span></span>
                <div className='flex gap-1'>
                    <Trash2 size={18} className='text-red-600 cursor-pointer' />
                </div>
              
            </div>
        </div>
    )
}

export default ProjectDivideTodoCard
