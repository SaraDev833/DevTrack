import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ProjectTable from "../components/projects/ProjectTable";

import projects from "../data/ProjectData";
const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);

  const [Projects, setProjects] = useState(projects)

  const tabs = [
    "All Projects",
    "In Progress",
    "Planning",
    "On Hold",
    "Completed",
    "Archived",
  ];
  const deleteProject = (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this task?")
    if (!confirmDelete) return;
    const remainingProjects = projects.filter((project) => (
      project.id !== id
    ));
    setProjects(remainingProjects)
    alert("Task Deleted!")
  }
  const taskPerPage = 7;

  const filteredProjects =
    selectedTab === "All Projects"
      ? projects
      : projects.filter((project) => project.status === selectedTab);

  const totalPage = Math.ceil(filteredProjects.length / taskPerPage);

  const lastIndex = currentPage * taskPerPage;
  const firstIndex = lastIndex - taskPerPage;
  const currentProjects = filteredProjects.slice(firstIndex, lastIndex);

  return (
    <div className="w-full min-w-0 bg-slate-100 space-y-6">
      <Navbar
        title="Projects"
        description="View and manage all your projects in one place"
      />

      <div className="flex items-center gap-6 border-b border-slate-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setCurrentPage(1);
            }}
            className={`font-semibold pb-3 cursor-pointer whitespace-nowrap transition ${selectedTab === tab
              ? "text-indigo-600 border-b-2 border-b-indigo-600"
              : "text-slate-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* table header */}
        <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-5 py-4 border-b border-slate-200 bg-slate-50">
          <span className="text-sm text-slate-600 font-semibold">Project</span>
          <span className="text-sm text-slate-600 font-semibold">Progress</span>
          <span className="text-sm text-slate-600 font-semibold">Team</span>
          <span className="text-sm text-slate-600 font-semibold">Due Date</span>
          <span className="text-sm text-slate-600 font-semibold">Status</span>
          <span className="text-sm text-slate-600 font-semibold">Actions</span>
        </div>

        {/* project rows */}
        {currentProjects.map((project) => (
          <ProjectTable key={project.id} project={project} Ondelete={deleteProject} />
        ))}

        {currentProjects.length === 0 && (
          <div className="p-6 text-center text-slate-500">No projects found</div>
        )}
      </div>

      {/* pagination */}
      <div className="flex justify-center gap-2 my-6 flex-wrap">
        {[...Array(totalPage)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded-md transition ${currentPage === index + 1
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-white hover:bg-blue-600 hover:text-white"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;