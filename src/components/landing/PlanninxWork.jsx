import { ChartLine, Folder, MonitorCloud, MoveRight, SquareCheckBig, Users } from 'lucide-react'
import React from 'react'

const PlanninxWork = () => {
    const cards = [
        {
            icon:<MonitorCloud/>,
            name:"Create Workspace",
            desc:"Sign and create your workspace"
        },
        {
            icon:<Users/>,
            name:"Add Your Team",
            desc:"Invite your team members"
        },
        {
            icon:<Folder/>,
            name:"Create Projects",
            desc:"Organize work into projects"
        },
        {
            icon:<SquareCheckBig/>,
            name:"Assign Tasks",
            desc:"Delegate and set deadlines"
        },
        {
            icon:<ChartLine/>,
            name:"Track Progress",
            desc:"Monitor and deliver results"
        }
    ]
  return (
    <div id='##how-it-works' className='grid grid-cols-1 lg:grid-cols-[1fr_5fr]  py-3 my-6'>
        {/* left side */}
      <div className='flex flex-col gap-2 items-center lg:items-start mb-6 lg:mb-0'>
       <h2 className='font-bold text-2xl text-nowrap text-slate-900'>How Plannix Works</h2>
       <p className='text-sm text-slate-500 text-nowrap m-0'>Get started in just a few simple steps</p>
       <div>
          <button className='flex items-center justify-center gap-1 py-1 px-2 bg-linear-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white text-sm font-medium rounded-lg'> 
            <span>Get Started Free</span>
            <MoveRight />
        </button>
       </div>
      
      </div>
   {/* right side */}
   <div className='flex items-center justify-between relative lg:flex-row flex-col gap-10 lg:gap-0'>
      <span
  className="
    absolute
    bg-indigo-600/20
    z-0

  
    lg:left-0
    lg:right-0
    lg:top-6
    lg:h-0.5
    lg:w-auto
    lg:translate-x-0


    left-1/2
    top-[10%]
    bottom-[10%]
    w-0.5
    -translate-x-1/2
  "
></span>
        {
            cards.map((card, index)=>(
                <div key={card.name} className='flex flex-col gap-1 items-center justify-center relative z-10 bg-white py-3 lg:py-0'>
                   <span className='bg-white px-1.5  lg:py-0'>
                     <span className='bg-indigo-200/50 text-indigo-600 rounded-full h-12 w-12 text-xs flex justify-center items-center'>{card.icon}</span>
                     </span>
                     <h2 className='text-sm font-bold text-slate-900 bg-white'><span>{index + 1}. </span>{card.name}</h2>
                     <p className='text-xs text-slate-500 font-medium bg-white'>{card.desc}</p>
                    </div>
            ))
        }
   </div>
    </div>
  )
}

export default PlanninxWork
