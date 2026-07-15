import React from "react";
import Man1 from "../../assets/man-1.jfif";
import Man2 from "../../assets/man-2.jfif";
import Man3 from "../../assets/man-3.jfif";
import Man4 from "../../assets/man-4.jfif";

const TeamOverview = () => {
  const lists = [
    {
      name: "Rafi Ahmed",
      image: Man1,
      title: "Developer",
      status: 75,
      completed: 12,
    },
    {
      name: "Maham Tanvir",
      image: Man2,
      title: "UI/UX Designer",
      status: 60,
      completed: 8,
    },
    {
      name: "Hasan Mahmud",
      image: Man3,
      title: "Backend Developer",
      status: 80,
      completed: 10,
    },
    {
      name: "Nusrat Jahan",
      image: Man1,
      title: "QA Engineer",
      status: 40,
      completed: 6,
    },
    {
      name: "Aminul Islam",
      image: Man4,
      title: "DevOps Engineer",
      status: 55,
      completed: 7,
    },
  ];

  return (
    <div className="bg-white p-6 border border-slate-200 shadow-sm rounded-2xl w-full h-full min-w-0 flex flex-col">
      <div className="flex justify-between items-center gap-3 mb-6">
        <h1 className="text-lg font-bold text-slate-900 truncate">
          Team Overview
        </h1>

        <a href="#" className="text-sm font-medium text-indigo-600 shrink-0">
          View team
        </a>
      </div>

      <div className="space-y-5 flex-1">
        {lists.map((list) => (
          <div
            className="flex items-center justify-between gap-3 min-w-0"
            key={list.name}
          >
            <div className="flex gap-3 items-center min-w-0 flex-1">
              <img
                src={list.image}
                alt={list.name}
                className="w-10 h-10 object-cover object-top rounded-full shrink-0"
              />

              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">
                  {list.name}
                </p>

                <p className="text-sm text-slate-500 truncate">
                  {list.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="w-20 sm:w-24">
                <span className="text-xs text-slate-400 font-medium block mb-1 text-right">
                  {list.completed} tasks
                </span>

                <div className="h-1.5 bg-slate-500/10 rounded-full w-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${list.status}%` }}
                  ></div>
                </div>
              </div>

              <span className="text-xs text-slate-500 w-8 text-right">
                {list.status}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 border border-slate-200 shadow-sm py-2 px-4 w-full rounded-lg text-indigo-600 text-sm font-medium hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300">
        Invite Team Member
      </button>
    </div>
  );
};

export default TeamOverview;