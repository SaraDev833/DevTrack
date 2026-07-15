import React from "react";
import {
  CreditCard,
  Globe,
  Megaphone,
  ShoppingCart,
  TabletSmartphone,
} from "lucide-react";

const RecentProjects = () => {
  const lists = [
    {
      name: "Website Design",
      icon: <Globe size={20} />,
      status: "In progress",
      bgColor: "bg-indigo-200/50",
      color: "text-indigo-600",
      percentage: 60,
    },
    {
      name: "Mobile App",
      icon: <TabletSmartphone size={20} />,
      bgColor: "bg-blue-200/50",
      color: "text-blue-600",
      status: "In progress",
      percentage: 40,
    },
    {
      name: "Ecommerce API",
      icon: <ShoppingCart size={20} />,
      bgColor: "bg-green-200/50",
      color: "text-green-600",
      status: "Completed",
      percentage: 100,
    },
    {
      name: "Marketing Website",
      icon: <Megaphone size={20} />,
      bgColor: "bg-orange-200/50",
      color: "text-orange-600",
      status: "In progress",
      percentage: 30,
    },
    {
      name: "Payment Gateway",
      icon: <CreditCard size={20} />,
      bgColor: "bg-purple-200/50",
      color: "text-purple-600",
      status: "In progress",
      percentage: 20,
    },
  ];

  return (
    <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-2xl w-full h-full min-w-0">
      <div className="flex justify-between items-center gap-3 mb-6">
        <h1 className="text-lg font-bold text-slate-900 truncate">
          Recent Projects
        </h1>

        <a href="#" className="text-sm font-medium text-indigo-600 shrink-0">
          View all
        </a>
      </div>

      <div className="space-y-6">
        {lists.map((list) => (
          <div
            key={list.name}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-w-0"
          >
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div
                className={`${list.color} ${list.bgColor} h-11 w-11 rounded-xl flex items-center justify-center shrink-0`}
              >
                {list.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-bold text-slate-900 truncate">
                    {list.name}
                  </span>

                  <span className="text-sm text-slate-500 shrink-0">
                    {list.percentage}%
                  </span>
                </div>

                <div className="h-1.5 bg-slate-500/10 rounded-full w-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${list.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <button
              className={`${list.color} ${list.bgColor} py-2 px-3 rounded-full text-sm whitespace-nowrap self-start sm:self-auto shrink-0`}
            >
              {list.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;