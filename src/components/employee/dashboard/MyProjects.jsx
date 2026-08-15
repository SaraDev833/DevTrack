import React, { useState } from 'react'

const MyProjects = ({project , percentage}) => {
  console.log(percentage)
  const[showAll , setShowAll] = useState(false)
  return (
    <div className='bg-white rounded-md border border-slate-200 shadow-sm p-4 '><div className="title flex justify-between items-center w-full">
        <h2 className='text-sm font-bold text-slate-900 '>My Projects</h2>
        <p className='text-sm text-indigo-600 font-medium cursor-pointer' onClick={() => setShowAll(!showAll)}>{showAll ? "View Less" : "View All"}</p>
      </div>
       {project.map((p)=>(

        <div className='flex justify-between items-center w-full'> 
                <div className='flex flex-col gap-1'>
                 <h2>{p.name}</h2>
                 <div></div>
                </div>
                <div>{percentage}%</div>
          </div>
       ))}
    </div>
  )
}

export default MyProjects
