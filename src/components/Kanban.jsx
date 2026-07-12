import React from 'react'
import { FolderClosed, ListTodo ,ClockAlert,Check} from 'lucide-react'
const Kanban = () => {
  const cards = [
  {
    name: "Total Projects",
    count: 12,
    icon: FolderClosed,
    bgColor:"bg-indigo-200/50",
    color:"text-indigo-600",
    desc: "2 from last month",
  },
  {
    name: "Total Tasks",
    count: 8,
    icon: ListTodo,
    bgColor:"bg-blue-200/50",
    color:"text-blue-600",
    desc: "8 from last month",
  },
  {
    name: "Completed Tasks",
    count: 12,
    icon: Check,
    bgColor:"bg-green-200/50",
    color:"text-green-600",
    desc: "2 from last month",
  },
  {
    name: "Overdue Tasks",
    count: 12,
    icon: ClockAlert,
    bgColor:"bg-red-200/50",
    color:"text-red-600",
    desc: "2 from last month",
  },
];
  return (
    <div className='flex justify-between items-center mt-10'>
      {cards.map(card=>{
        const Icon = card.icon;
        return(
          <div key={card.name} className='flex items-center justify-center py-3 px-4 rounded-md shadow backdrop-blur-3xl gap-8 border bg-white border-slate-200 w-[300px]'>
                    <div className={`${card.bgColor}  ${card.color}  py-2 px-3 rounded-lg `}><Icon/></div>
                    <div className='flex flex-col'>
                      <p className='text-slate-600 font-medium text-lg text-nowrap'>{card.name}</p>
                      <span className='text-xl text-black'>{card.count}</span>
                      <span className='text-sm text-slate-500'>{card.desc}</span>
                    </div>
            </div>
        )
      })}
     
    </div>
  )
}

export default Kanban
