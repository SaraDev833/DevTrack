import { X } from 'lucide-react'
import React from 'react'

const TaskModal = ({closeModal , teamMembers}) => {
  return (

    <div className='fixed inset-0  bg-black/50 backdrop-blur-sm  z-50 flex items-center justify-center'>
      <div className=' bg-white w-150 p-6'>
        <div className="flex justify-between items-center">
          <h3 className='text-lg text-slate-900 font-medium'>Add New Task</h3>
          <X size={20} className='text-slate-700 cursor-pointer' onClick={closeModal} />
        </div>
        <div className='my-3 '>
          <form action="" className='w-full pr-3 flex flex-col gap-3'>
            <div className='flex flex-col gap-1.5'>
              <label htmlFor="" className='text-sm font-medium text-slate-900'>Project Name</label>
              <input type="text" placeholder='Enter Project Name' className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' />
            </div>
            <div className='flex flex-col gap-1.5 '>
              <label htmlFor="" className='text-sm font-medium text-slate-900'>Description</label>
              <textarea type="text" placeholder='Enter Project Name' className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' />
            </div>
            {/* priority + status */}
            <div className='flex  items-center w-full gap-3'>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Priority</label>
                <select name="" id="" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium'>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Status</label>
                <select name="" id="" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium'>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            {/* start date and due date */}
            <div className='flex  items-center w-full gap-3'>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Assign To</label>
                <select name="" id="" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium'>
                  {teamMembers.map((member)=>(
                    <>
   <option key={member} value={member}>{member}</option>
                
                  </>
                  ))}
               
                </select>
              </div>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Status</label>
          <input
        type="date"
        name="dueDate"
      className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium'

      />
              </div>
            </div>
                      <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={closeModal}
              className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-600 font-semibold text-sm cursor-pointer"
             
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-3 py-1.5 rounded-md bg-indigo-600 text-white font-semibold text-sm cursor-pointer"
            >
              Add Task
            </button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default TaskModal
