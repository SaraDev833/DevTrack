import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

const FAQ = () => {
 const [openFAQ , setOpenFAQ]  = useState(null)
 const toggleFAQ = (id)=>{
  setOpenFAQ(openFAQ === id? null : id)
 }
  return (
    <div className='p-6 bg-white flex flex-col gap-3 rounded-md border border-slate-200 '>
      <h2 className='text-slate-900 font-semibold text-sm'>Frequently asked questions</h2>
     
      <div className='flex flex-col gap-1 border-b border-b-slate-200 pb-2'>
        <div>
           <div className='flex justify-between items-center cursor-pointer' onClick={()=>toggleFAQ(1)}>
          <p className='text-slate-900 font-medium'>what is Plannix?</p>
          <ChevronDown size={18} />
          </div>
          <div>
          {openFAQ === 1 && (<div className=' '>
           <span className='text-slate-500 text-xs font-medium'>Plannix is a smart project management platform that helps teams organize tasks, collaborate efficiently, and keep projects on track -all in one place</span>
          </div>)}
        </div>
        </div>
       
      </div>
      <div className='flex flex-col gap-1 border-b border-b-slate-200 pb-2'>
        <div>
           <div className='flex justify-between items-center cursor-pointer' onClick={()=>toggleFAQ(2)}>
          <p className='text-slate-900 font-medium'>Can I use it for free?</p>
          <ChevronDown size={18} />
          </div>
          <div>
          {openFAQ===2 && (<div className=' '>
           <span className='text-slate-500 text-xs font-medium'>yes you can use it for free and the premium version is coming soon</span>
          </div>)}
        </div>
        </div>
       
      </div>
      <div className='flex flex-col gap-1  pb-2'>
        <div>
           <div className='flex justify-between items-center cursor-pointer' onClick={()=>toggleFAQ(3)}>
          <p className='text-slate-900 font-medium'>Can I invite my team?</p>
          <ChevronDown size={18} />
          </div>
          <div>
          {openFAQ===3 && (<div className=' '>
           <span className='text-slate-500 text-xs font-medium'>yes you can invite your team members and assign them work accordingly.</span>
          </div>)}
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default FAQ
