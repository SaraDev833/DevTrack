import React from "react";
import { Bell, Plus, Search } from "lucide-react";
import manImg from "../../assets/man-1.jfif";

const Navbar = ({title, description}) => {
  return (
    <header className="w-full min-w-0">
      <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-center 2xl:justify-between">
        {/* Left Side */}
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-950">
            {title}
          </h1>

          <p className="mt-1 text-sm sm:text-base text-slate-500 max-w-2xl">
    {description}
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full 2xl:w-auto flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
          {/* Search */}
          <div className="relative w-full sm:flex-1 2xl:w-[360px] 2xl:flex-none">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="text"
              className="w-full h-11 border border-slate-200 bg-white rounded-xl pl-10 pr-4 text-sm outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
              placeholder="Search projects, tasks..."
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button className="h-11 px-4 bg-indigo-600 text-white rounded-xl flex items-center justify-center gap-2 text-sm font-semibold hover:bg-indigo-700 transition">
              <Plus size={18} />
              <span>New Task</span>
            </button>

            <button className="relative h-11 w-11 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition">
              <Bell size={20} className="text-slate-700" />

              <span className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1 bg-red-600 text-white rounded-full flex items-center justify-center text-[11px] font-semibold">
                12
              </span>
            </button>

            <img
              src={manImg}
              className="h-11 w-11 rounded-xl object-cover shrink-0"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;