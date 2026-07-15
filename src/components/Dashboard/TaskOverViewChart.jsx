import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const taskData = [
  { day: "Sun", completed: 10 },
  { day: "Mon", completed: 18 },
  { day: "Tue", completed: 15 },
  { day: "Wed", completed: 28 },
  { day: "Thu", completed: 38 },
  { day: "Fri", completed: 37 },
  { day: "Sat", completed: 68 },
];

const TaskOverViewChart = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm h-full min-w-0">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h3 className="text-lg font-bold text-slate-900 truncate">
          Task Overview
        </h3>

        <button className="shrink-0 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
          This Week
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="w-full h-[260px] sm:h-[275px] min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={taskData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="completedColor"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.08} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#64748b" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#64748b" }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="completed"
              stroke="#4f46e5"
              strokeWidth={3}
              fill="url(#completedColor)"
              fillOpacity={1}
              dot={{
                r: 4,
                strokeWidth: 2,
                stroke: "#4f46e5",
                fill: "#ffffff",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
        <p className="text-slate-500 text-sm">Tasks Completed</p>
      </div>
    </div>
  );
};

export default TaskOverViewChart;