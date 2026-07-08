import React from 'react'

const LandingFooterCard = ({icon , title , description}) => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center w-[300px] p-6 border-r border-slate-300 last:border-r-0 mt-10'>
      <div className="icon h-15 w-15 bg-indigo-700/10 flex justify-center items-center rounded-lg">
        {icon}
      </div>
      <h2 className='font-medium'>{title}</h2>
      <p className='text-slate-600 text-center'>{description}</p>
    </div>
  )
}

export default LandingFooterCard
