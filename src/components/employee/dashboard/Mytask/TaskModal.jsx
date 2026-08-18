import React from 'react'

const TaskModal = ({taskName , description , setModelOpen}) => {
  return (
     <div className='fixed inset-0  bg-black/30 backdrop-blur-xs  z-50 flex items-center justify-center'>
       <div className='bg-slate-100 w-150 p-6 flex flex-col gap-2' >
                <h2 className='text-3xl font-medium text-slate-900'>{taskName}</h2>
                <p className='text-lg text-slate-500 '>{description}</p>
                <div className='flex mt-3 justify-end'>
  <button onClick={()=>setModelOpen(false)} className='py-2 px-3 bg-indigo-600 hover:bg-indigo-400 text-white font-medium text-sm cursor-pointer rounded-md'>Close</button>
                </div>
              
       </div>
    </div>
  )
}

export default TaskModal
