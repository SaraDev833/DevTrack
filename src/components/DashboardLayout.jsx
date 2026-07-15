import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-100 flex overflow-x-hidden">
      {/* Mobile dark overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        desktopOpen={desktopOpen}
        setDesktopOpen={setDesktopOpen}
      />

      <main className="flex-1 min-w-0 w-full overflow-x-hidden">
        {/* Mobile top bar */}
        <div className="lg:hidden bg-white border-b border-slate-200 p-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="h-10 w-10 rounded-lg border border-slate-200 flex items-center justify-center"
          >
            <Menu size={22} />
          </button>
        </div>

        <div className="p-4 sm:p-5 lg:p-6 min-w-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;