import React from "react";
import Man1 from "../../assets/man-1.jfif";
import Man2 from "../../assets/man-2.jfif";
import Man3 from "../../assets/man-3.jfif";
import Man4 from "../../assets/man-4.jfif";

const RecentActivity = () => {
  const lists = [
    {
      name: "Rafi Ahmed",
      status: "Completed the tasks",
      comment: "Login API integration in website redesign",
      image: Man1,
      time: "2hr ago",
      id: 1,
    },
    {
      name: "Maham Tanvir",
      status: "Updated the task",
      comment: "User management in mobile app",
      image: Man2,
      time: "1d ago",
      id: 2,
    },
    {
      name: "Hasan Mahmud",
      status: "Commented on",
      comment: "Bug in task filter",
      image: Man3,
      time: "4hr ago",
      id: 3,
    },
    {
      name: "Nusrat Jahan",
      status: "Uploaded a file to",
      comment: "Design landing page",
      image: Man4,
      time: "6hr ago",
      id: 4,
    },
    {
      name: "Rafi Ahmed",
      status: "Completed the tasks",
      comment: "Login API integration in website redesign",
      image: Man2,
      time: "1d ago",
      id: 5,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm h-full min-w-0">
      <div className="flex justify-between items-center gap-3 mb-6">
        <h1 className="font-bold text-lg text-slate-900 truncate">
          Recent Activity
        </h1>

        <a href="#" className="text-indigo-600 text-sm font-medium shrink-0">
          View all
        </a>
      </div>

      <div className="space-y-5">
        {lists.map((list) => (
          <div key={list.id} className="flex items-start gap-3 min-w-0">
            <img
              src={list.image}
              alt={list.name}
              className="w-10 h-10 rounded-full object-cover object-top shrink-0"
            />

            <div className="flex-1 min-w-0">
              <p className="truncate">
                <span className="text-sm font-bold text-slate-900">
                  {list.name}
                </span>{" "}
                <span className="text-slate-800 text-sm">{list.status}</span>
              </p>

              <p className="text-sm text-slate-500 truncate">
                {list.comment}
              </p>
            </div>

            <span className="text-xs text-slate-500 whitespace-nowrap shrink-0 pt-1">
              {list.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;