import React, { useState } from 'react'

import { CheckCheck, ClipboardList, ClockAlert, ClockFading } from 'lucide-react';

const Kanban = ({user , filterData, inProgresstask, completedTask , overDue}) => {
 
    
  const cards = [
    {
      name:"My Tasks",
      icon:ClipboardList ,
      description: "Total Tasks",
      color:"text-indigo-600",
      bgColor:"bg-indigo-200/50",
      count:filterData.length
    },
    {
      name:"In Progress",
      icon:ClockFading ,
      color:"text-sky-600",
      bgColor:"bg-sky-200/50",
      description: "Total Tasks",
      count:inProgresstask.length
    },
    {
      name:"Completed",
      icon:CheckCheck,
      color:"text-green-600",
      bgColor:"bg-green-200/50",
      description: "Completed Tasks",
      count:completedTask.length
    },
    {
      name:"Overdue Tasks",
      icon:ClockAlert ,
      color:"text-red-600",
      bgColor:"bg-red-200/50",
      description: "Overdue Tasks",
      count:overDue.length
    },
  ]
  return (
     <div
      className="grid gap-6 mt-10"
      style={{
        gridTemplateColumns:
          "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
      }}
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.name}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex items-center gap-4 min-w-0 h-full"
          >
            <div
              className={`${card.bgColor} ${card.color} h-12 w-12 rounded-xl flex items-center justify-center shrink-0`}
            >
              <Icon size={24} />
            </div>

            <div className="min-w-0">
              <p className="text-slate-600 font-medium text-sm truncate">
                {card.name}
              </p>

              <h3 className="text-2xl font-bold text-slate-950 mt-1">
                {card.count}
              </h3>

              <p className="text-sm text-slate-500 truncate">{card.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Kanban
