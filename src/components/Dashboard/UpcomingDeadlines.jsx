import React from "react";

const UpcomingDeadlines = () => {
  const lists = [
    {
      month: "July",
      date: 12,
      task: "Design landing page",
      title: "Website Design",
      priority: "High",
      color: "text-red-600",
      bgColor: "bg-red-200/50",
      id: 11,
    },
    {
      month: "July",
      date: 14,
      task: "User Authentication Module",
      title: "Mobile App",
      priority: "High",
      color: "text-red-600",
      bgColor: "bg-red-200/50",
      id: 22,
    },
    {
      month: "July",
      date: 18,
      task: "Payment gateway integration",
      title: "Ecommerce API",
      priority: "Medium",
      color: "text-yellow-600",
      bgColor: "bg-yellow-200/40",
      id: 33,
    },
    {
      month: "July",
      date: 22,
      task: "API documentation",
      title: "Payment Gateway",
      priority: "Low",
      color: "text-green-600",
      bgColor: "bg-green-200/50",
      id: 44,
    },
    {
      month: "July",
      date: 20,
      task: "Content management system",
      title: "Marketing Website",
      priority: "Low",
      color: "text-green-600",
      bgColor: "bg-green-200/50",
      id: 55,
    },
  ];

  return (
    <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-2xl w-full h-full min-w-0">
      <div className="flex justify-between items-center gap-3 mb-6">
        <h1 className="text-lg font-bold text-slate-900 truncate">
          Upcoming Deadlines
        </h1>

        <a href="#" className="text-sm font-medium text-indigo-600 shrink-0">
          View Calendar
        </a>
      </div>

      <div className="space-y-1">
        {lists.map((list) => (
          <div
            key={list.id}
            className="flex items-center gap-3 py-3 border-b border-slate-200 last:border-0 min-w-0"
          >
            <div className="w-14 rounded-lg border border-slate-300 shadow-sm py-1 text-center shrink-0">
              <span className="block text-xs font-medium text-slate-500">
                {list.month.slice(0, 3)}
              </span>

              <span className="block text-sm font-bold text-slate-900">
                {list.date}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">
                {list.task}
              </p>

              <p className="text-sm text-slate-500 truncate">{list.title}</p>
            </div>

            <span
              className={`${list.color} ${list.bgColor} py-1 px-2 rounded-full text-xs font-medium whitespace-nowrap shrink-0`}
            >
              {list.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;