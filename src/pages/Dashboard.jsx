import React from "react";
import Navbar from "../components/Dashboard/Navbar";
import Kanban from "../components/Kanban";
import TaskOverViewChart from "../components/Dashboard/TaskOverViewChart";
import RecentProjects from "../components/Dashboard/RecentProjects";
import RecentActivity from "../components/Dashboard/RecentActivity";
import UpcomingDeadlines from "../components/Dashboard/UpcomingDeadlines";
import TeamOverview from "../components/Dashboard/TeamOverview";

const Dashboard = () => {
  return (
    <div className="w-full min-w-0 bg-slate-100 space-y-6">
      <Navbar />
      <Kanban />

      {/* Chart + Recent Projects */}
      <div
        className="grid gap-6 items-stretch"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
        }}
      >
        <TaskOverViewChart />
        <RecentProjects />
      </div>

      {/* Bottom 3 Cards */}
      <div
        className="grid gap-6 items-stretch"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        }}
      >
        <RecentActivity />
        <UpcomingDeadlines />
        <TeamOverview />
      </div>
    </div>
  );
};

export default Dashboard;