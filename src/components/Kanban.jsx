import React from "react";
import { FolderClosed, ListTodo, ClockAlert, Check } from "lucide-react";

const Kanban = () => {
  const cards = [
    {
      name: "Total Projects",
      count: 12,
      icon: FolderClosed,
      bgColor: "bg-indigo-200/50",
      color: "text-indigo-600",
      desc: "2 from last month",
    },
    {
      name: "Total Tasks",
      count: 8,
      icon: ListTodo,
      bgColor: "bg-blue-200/50",
      color: "text-blue-600",
      desc: "8 from last month",
    },
    {
      name: "Completed Tasks",
      count: 12,
      icon: Check,
      bgColor: "bg-green-200/50",
      color: "text-green-600",
      desc: "2 from last month",
    },
    {
      name: "Overdue Tasks",
      count: 12,
      icon: ClockAlert,
      bgColor: "bg-red-200/50",
      color: "text-red-600",
      desc: "2 from last month",
    },
  ];

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

              <p className="text-sm text-slate-500 truncate">{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Kanban;