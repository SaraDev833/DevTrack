import React from 'react'
import LandingFooterCard from './LandingFooterCard'
import { FolderClosed } from 'lucide-react' 
const LandingFooter = () => {
 
  return (
    <div className="bg-indigo-600/10 fixed inset-x-0 bottom-0">
      <div className="container py-15 mx-auto">
               <div className="title">
                <h2 className='text-3xl font-bold text-center mb-3'>Everything your team needs to succedd</h2>
                <p className='text-slate-600 text-center'>Powerful Features to streamline your workflow and boost productivity</p>
               </div>
               <div className="flex justify-between items-center ">
             <LandingFooterCard icon = {<FolderClosed className='text-indigo-700'/>} title="Project Management" description = "Create projects, set deadlines and organize work efficiently"/>
             <LandingFooterCard/>
             <LandingFooterCard/>
             <LandingFooterCard/>
             <LandingFooterCard/>
               </div>
      </div>
    </div>
  )
}

export default LandingFooter
