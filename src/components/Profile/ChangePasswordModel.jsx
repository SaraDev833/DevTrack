import React from 'react'

const ChangePasswordModel = () => {
  return (
      <div className='fixed inset-0 z-50 bg-black/50 backdrop:blur-sm flex items-center justify-center p-4 h-auto'>
          <div className='bg-white w-[95%] sm:w-[90%] md:w-[650px] h-70vh  rounded-lg p-4 sm:p-6 '>
            <form action="">
             <div className='flex flex-col gap-1'>
                 <label htmlFor="password">Password</label>
                 <input type="password" placeholder='current password'  className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium placeholder:text-slate-400'/>
             </div>
             <div className='flex flex-col gap-1'>
                 <label htmlFor="password">New Password</label>
                 <input type="password" placeholder='current password'  className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium placeholder:text-slate-400'/>
             </div>
             <div className='flex flex-col gap-1'>
                 <label htmlFor="password">Confirm Password</label>
                 <input type="password" placeholder='current password'  className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium placeholder:text-slate-400'/>
             </div>
             <div className='flex justify-end'>
                     <button className='py-2 px-3 bg-indigo-600 text-white mt-3 text-sm rounded-md hover:bg-indigo-500 cursor-pointer'>Update Password</button>
             </div>
            </form>
          </div>
    </div>
  )
}

export default ChangePasswordModel
