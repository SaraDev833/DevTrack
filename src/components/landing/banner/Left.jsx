import React from 'react'
import { Star, ArrowRight, CirclePlay, CircleCheck } from 'lucide-react'
  const lists = ["No credit card required", "Free Forever plan", "Setup in minutes"]
const Left = () => {
  return (
        <div className="left flex flex-col gap-7 w-[40%] mt-20">
                <span className='flex items-center gap-2 bg-indigo-600/10 w-fit py-2 px-4 rounded-full'>
                    <Star className='text-indigo-600 font-bold !h-5 !w-5' />
                    <p className='text-sm font-bold'>Project and Bug Management for Modern Terms</p>
                </span>
                <h2 className='text-5xl font-bold leading-13'>Plan. Track.<br /> Deliver. <span className='bg-linear-to-r from-indigo-700 via-indigo-500 to to-purple-600 bg-clip-text text-transparent '>Together</span></h2>
                <p className='text-slate-600 text-lg font-medium'>DevTrack helps teams organize projects , manage tasks , track progress and ship better software faster</p>
                <div className="buttons flex gap-4 ">
                    <button className='bg-linear-to-r from-indigo-700 via-indigo-600 to-purple-700 text-white py-3 px-4 flex font-medium cursor-pointer justify-center items-center gap-2 text-center rounded-lg' >Get Started Free <ArrowRight className='!h-5 !w-5 !mt-[0.8px]' /></button>
                    <button className='flex justify-center items-center rounded-lg text-black font-medium gap-2 border border-slate-700 py-3 px-4'><CirclePlay />Watch Demo</button>
                </div>
                <div className="list flex items-center gap-5">
                    {lists.map((list, index) => (
                        <div key={list[index]}>
                            <span className='flex items-center justify-center gap-2 text-sm'> <CircleCheck className='text-indigo-600' />{list}</span>
                        </div>
                    ))}
                </div>
            </div>
  )
}

export default Left
