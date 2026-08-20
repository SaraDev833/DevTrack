import React from 'react'
import LandingFooterCard from './LandingFooterCard'
import {motion} from "framer-motion"
import { FolderClosed , SquareCheckBig , SquareKanban ,Users , Bell, ChartLine} from 'lucide-react' 
const LandingFooter = () => {
 
  return (
      <motion.div 
      initial={{
        opacity: 0,
        y:-50
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:0.7,
        delay:0.2,
        ease:"ease"
      }}
      
      className="max-w-7xl py-15 mx-auto bg-linear-to-r from-purple-200/50 to-indigo-200/50">
               <div className="title">
                <h2 className='md:text-2xl lg:text-3xl font-bold text-center mb-3 text-xl'>Everything you need to manage your workflow</h2>
                <p className='text-slate-600 text-center md:text-lg text-sm'>Powerful Features to keep your team organized and productive</p>
               </div>
               <div className="flex justify-between items-center flex-col md:flex-row ">
             <LandingFooterCard icon = {<FolderClosed className='text-indigo-700'/>} title="Project Management" description = "Create projects, set deadlines and organize work efficiently"/>
             <LandingFooterCard icon={<SquareCheckBig />} title="Task Tracking" description="Break down work into tasks and track progress in real time" />
             <LandingFooterCard icon={<SquareKanban />} title="Kanbar Boards" description="Visualize your work flow and move tasks across stages"/>
             <LandingFooterCard icon={<Users />} title="Team Collaboration" description="Ïnvite team members and work together seamlessly"/>
             <LandingFooterCard icon={<Bell />} title="Smart notification" description="Stay updated with real time notifications and reminders"/>
       
               </div>
      </motion.div>
   
  )
}

export default LandingFooter
