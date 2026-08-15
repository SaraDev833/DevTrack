import React, { useState } from 'react'

const MyProjects = ({ProjectInfo , input}) => {
 

  const[showAll , setShowAll] = useState(false);
  const filteredSearchTask = ProjectInfo.filter((project)=>(
    project.projectName.toLowerCase().includes(input.toLowerCase())
  ))
  const display = showAll? filteredSearchTask : filteredSearchTask.slice(0,3)
  return (
    <div className='bg-white rounded-md border border-slate-200 shadow-sm p-4 '><div className="title flex justify-between items-center w-full mb-2">
        <h2 className='text-sm font-bold text-slate-900 '>My Projects</h2>
        <p className='text-sm text-indigo-600 font-medium cursor-pointer' onClick={() => setShowAll(!showAll)}>{showAll ? "View Less" : "View All"}</p>
      </div>
    
          {display.map((project)=>(
        <div className='flex justify-between items-center w-full gap-4'> 
         <div className='flex flex-col gap-2 w-full my-2'>
                 <h2 className='text-slate-900 font-medium text-sm'>{project.projectName}</h2>
                 <div className='h-2 w-full bg-slate-200 rounded-full'>
                  <div style={{width:`${project.percentage}%`}}  className='bg-indigo-600 h-full rounded-full'></div>
                 </div>
                </div>
                <div className='font-medium text-slate-900'>{project.percentage}%</div>
          </div>
          ))}
       
   
    </div>
  )
}

export default MyProjects
