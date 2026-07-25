import React from 'react'
import Man2 from "../../assets/man-1.jfif"
const ProjectInfo = ({ project }) => {

    return (
        <div className='flex flex-col gap-4'>
            <div className='client'>
                <h5 className='text-xs text-slate-400'>Client</h5>
                <p className='text-slate-900 text-sm'>{project.client}</p>
            </div>
            <div className='budget'>
                <h5 className='text-xs text-slate-400'>Budget</h5>
                <p className='text-slate-900 text-sm'> {project.budget}</p>
            </div>
            <div className='category'>
                <h5 className='text-xs text-slate-400'>Category</h5>
                <p className='text-slate-900 text-sm'>{project.category}</p>
            </div>
            <div className='desc'>
                <h5 className='text-xs text-slate-400'>Description</h5>
                <p className='text-slate-900 text-sm'>{project.description}</p>
            </div>
            <div className='created flex flex-col gap-1'>
                <h5 className='text-xs text-slate-400'>Created By</h5>
                <div className='flex items-center gap-2'>
              <img src={Man2} alt="" className='object-cover h-10 w-10 rounded-full object-cover object-top'/>

                    <p className='text-slate-900 text-sm'>{project.manager}</p>
                </div>

            </div>
            <div className='createdAt'>
                <h5 className='text-xs text-slate-400'>Created at</h5>
                <p className='text-slate-900 text-sm'>{project.createdAt}</p>
            </div>

        </div>
    )
}

export default ProjectInfo
