import React from 'react'
import LandingFooterCard from './LandingFooterCard'
import { FolderClosed , SquareCheckBig , SquareKanban ,Users , Bell, ChartLine} from 'lucide-react' 
const LandingFooter = () => {
 
  return (
    <div className="bg-indigo-600/10 ">
      <div className="max-w-7xl py-15 mx-auto">
               <div className="title">
                <h2 className='md:text-2xl lg:text-3xl font-bold text-center mb-3 text-xl'>Everything your team needs to succeed</h2>
                <p className='text-slate-600 text-center md:text-lg text-sm'>Powerful Features to streamline your workflow and boost productivity</p>
               </div>
               <div className="flex justify-between items-center flex-col md:flex-row ">
             <LandingFooterCard icon = {<FolderClosed className='text-indigo-700'/>} title="Project Management" description = "Create projects, set deadlines and organize work efficiently"/>
             <LandingFooterCard icon={<SquareCheckBig />} title="Task Tracking" description="Break down work into tasks and track progress in real time" />
             <LandingFooterCard icon={<SquareKanban />} title="Kanbar Boards" description="Visualize your work flow and move tasks across stages"/>
             <LandingFooterCard icon={<Users />} title="Team Collaboration" description="Ïnvite team members and work together seamlessly"/>
             <LandingFooterCard icon={<Bell />} title="Smart notification" description="Stay updated with real time notifications and reminders"/>
             <LandingFooterCard icon={<ChartLine />} title="Reports and insights" description="Get insights into team performance and project progress"/>
               </div>
      </div>
    </div>
  )
}

export default LandingFooter
