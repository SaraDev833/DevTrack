import React from 'react'

const Task = ({data}) => {
  console.log(data.title)
  return (
    <>
  <div className='bg-white border border-slate-200 shadow-sm p-4 rounded-md flex justify-between items-center overflow-hidden flex-col'>
    {data.map((task)=>(
    <React.Fragment key={task.projectId}>
       <div className='flex flex-col gap-2'>
    <h3>{task.title}</h3>
    <p>{task.projectName}</p>
       </div>
       <div className='flex gap-2'>
          <p>{task.dueDate}</p>
          <span>{task.priority}</span>
       </div>
       </React.Fragment>
    ))}
    </div>
  
    </>
  )
}

export default Task
