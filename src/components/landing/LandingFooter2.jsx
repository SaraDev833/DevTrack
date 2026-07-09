import React from 'react'
import {Cloudy ,Database ,ZodiacAquarius, Code} from 'lucide-react' 
const LandingFooter2 = () => {
    const iconsText= [
        {
            name: "Cloudly",
            icon: <Cloudy />
        },
        {
            name:"Dev Studio",
            icon:<Database />
        },
        {
            name:"Code Wave",
            icon:<Code />
        },
        {
            name:"Inno Soft",
            icon:<ZodiacAquarius />
        },
    ]
  return (
    <div className=' py-10 bg-indigo-950'>
       <div className="title">
        <h2 className='text-3xl text-white font-bold text-center'>Trusted By 500+ teams worldwide </h2>
        <p className='text-lg text-slate-300 text-center mt-4'>Join thousands of teams who choose Plannix to build better software</p>
       </div>
       <div className='flex  items-center justify-center gap-10 mt-15'>
             {iconsText.map((item)=>(
                 <div key={item.name} className='flex items-center justify-between gap-2'>
              
                <div className="icon  text-slate-300" >{item.icon}</div>
                <div className="name  font-medium text-slate-300">{item.name}</div>
                </div>
             ))}
           </div>
    </div>
  )
}

export default LandingFooter2
