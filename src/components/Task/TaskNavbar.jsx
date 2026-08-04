import { Plus, Search } from 'lucide-react'
import React from 'react'

const TaskNavbar = () => {
  return (
    <header className="w-full min-w-0">
      <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
        {/* Left Side */}
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-950">
           Task
          </h1>

          <p className="mt-1 text-sm sm:text-base text-slate-500 max-w-2xl">
 Manage and track all tasks
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full 2xl:w-auto flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
          {/* Search */}
          <div className="relative w-full sm:flex-1 2xl:w-[360px] 2xl:flex-none">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
           
              type="text"
              className="w-full h-11 border border-slate-200 bg-white rounded-xl pl-10 pr-4 text-sm outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              placeholder="Search tasks..."
            />
          </div>


        </div>
      </div>
      
    </header> 
  )
}

export default TaskNavbar
