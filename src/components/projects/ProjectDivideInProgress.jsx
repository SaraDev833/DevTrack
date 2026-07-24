import { ClipboardPenLine } from 'lucide-react'
import React from 'react'

const ProjectDivideInProgress = () => {
  return (
    <div className='h-full w-full flex items-center justify-center flex-col gap-1'>
        <div className='flex items-center justify-center p-4 h-fit w-fit rounded-full  bg-indigo-200/50'>
              <ClipboardPenLine className='text-indigo-600 ' size={24}/>
        </div>
        <div className="desc flex flex-col justify-center items-center">
          <h2 className='font-bold'>No tasks in progress yet</h2>
          <p className='text-center'>Tasks that are currently being worked on will appear here</p>
        </div>
      
    </div>
  )
}

export default ProjectDivideInProgress
