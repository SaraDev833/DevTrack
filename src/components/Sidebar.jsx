import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Bell,
  User,
  Menu,
  X,
} from "lucide-react";
import Logo from "./Logo";

const Sidebar = ({
  mobileOpen,
  setMobileOpen,
  desktopOpen,
  setDesktopOpen,
}) => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Tasks", path: "/tasks", icon: CheckSquare },
    { name: "Team", path: "/team", icon: Users },
    { name: "Notifications", path: "/notifications", icon: Bell },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <aside
      className={`
        fixed lg:static top-0 left-0 z-50
      min-h-screen shrink-0 bg-indigo-950 text-white
        transition-all duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        w-64
        ${desktopOpen ? "lg:w-64" : "lg:w-20"}
      `}
    >
      <div className="h-full flex flex-col px-4 py-6 overflow-hidden">
        {/* Logo + Toggle */}
        <div
          className={`flex items-center mb-8 ${
            desktopOpen ? "justify-between" : "lg:justify-center justify-between"
          }`}
        >
          <div className={`${desktopOpen ? "lg:block" : "lg:hidden"} block`}>
            <Logo />
          </div>

          {/* Desktop collapse button */}
          <button
            onClick={() => setDesktopOpen(!desktopOpen)}
            className="hidden lg:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-indigo-900"
          >
            <Menu size={22} />
          </button>

          {/* Mobile close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden h-9 w-9 flex items-center justify-center rounded-lg hover:bg-indigo-900"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl text-sm font-medium transition
                  ${
                    desktopOpen
                      ? "lg:justify-start lg:gap-3 lg:px-4"
                      : "lg:justify-center lg:px-3"
                  }
                  gap-3 px-4 py-3
                  ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-indigo-900 hover:text-white"
                  }`
                }
              >
                <Icon size={20} className="shrink-0" />

                <span
                  className={`${desktopOpen ? "lg:inline" : "lg:hidden"} inline`}
                >
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;