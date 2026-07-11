import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Bell,
  User,
  Menu,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: FolderKanban,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: CheckSquare,
    },
    {
      name: "Team",
      path: "/team",
      icon: Users,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64 px-5" : "w-20 px-3"
      } min-h-screen bg-indigo-950 text-white py-6 transition-all duration-900`}
    >
      {/* Logo + Menu */}
      <div
        className={`flex items-center ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        {isOpen && (
         <Logo/>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Nav Items */}
      <nav className="mt-8 flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center rounded-xl text-sm font-medium transition ${
                  isOpen
                    ? "gap-3 px-4 py-3 justify-start"
                    : "justify-center px-3 py-3"
                } ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              {isOpen && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;