import { Sparkles } from 'lucide-react'
import React from 'react'
import Facebook from '../../icons/Facebook'
import Instagram from '../../icons/Instagram'
import Twitter from '../../icons/Twitter'

const LandingFooter2 = () => {
  return (
    <div className='bg-slate-900 p-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex flex-col justify-center'>
                <div className="logo flex justify items-center gap-2">
                <Sparkles className='text-indigo-600 text-xl' fill='currentColor' />
                <p className=' font-semibold text-xl text-slate-200'>Plannix</p>
            </div>
            <p className='text-xs text-slate-200 font-medium'>Plan. Track . Deliver Together</p>
        </div>
           <div className='flex  items-center gap-5 cursor-pointer'>
                <Facebook/>
                <Instagram/>
                <Twitter/>

            </div>
              <div className='flex flex-col  justify-end-safe'>
                <h3 className='text-slate-200 font-bold'>Subscribe to our newsletter</h3>
                <p className='text-xs text-slate-400 font-medium mb-1'>Get update and tips</p>
              <div className='flex items-center gap-2'>
                <input type="text" placeholder='your email' className='py-1 px-3 placeholder:text-xs placeholder:text-slate-200 ring-1 ring-text-slate-200 focus:ring-indigo-700 bg-white/50 rounded-md '/>
                <button className=' px-3 py-1 text-slate-200 rounded-md bg-linear-to-r from-indigo-700 via-indigo-500 to-purple-700'>Subscribe</button>
              </div>

              </div>
         
    </div>
  )
}

export default LandingFooter2
