import { CheckCheck } from 'lucide-react'
import React from 'react'

const ProjectDivideCompleted = () => {
 return (
    <div className='h-full w-full flex items-center justify-center flex-col gap-1'>
        <div className='flex items-center justify-center p-4 h-fit w-fit rounded-full  bg-green-200/50'>
              <CheckCheck className='text-green-600 ' size={24}/>
        </div>
        <div className="desc flex flex-col justify-center items-center">
          <h2 className='font-bold'>No completed tasks yet</h2>
          <p className='text-center'>Tasks that are completed will appear here</p>
        </div>
      
    </div>
  )
}


export default ProjectDivideCompleted
