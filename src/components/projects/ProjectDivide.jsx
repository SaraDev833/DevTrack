import React from 'react'
import ProjectDividetodo from './ProjectDividetodo'

const ProjectDivide = ({project}) => {
  return (
      <div className=' grid gap-6' style={{gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))"}}>
       <div className='card bg-slate-100 rounded-md shadow-sm p-3 border border-slate-200'>
        <div className="title "><h3 className='font-medium text-lg flex mb-3 items-center text-slate-900 gap-3'>To Do <span className='h-6 w-6 text-xs rounded-xl bg-slate-300 text-slate-700 flex items-center justify-center'>{project.tasks.length}</span></h3>
        <ProjectDividetodo project={project}/>
        </div>
       </div>
       <div></div>
       <div></div>
       <div></div>
    </div>
  )
}

export default ProjectDivide
