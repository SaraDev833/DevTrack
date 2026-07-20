import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ProjectTable from "../components/projects/ProjectTable";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign and optimize the company website",
      progress: 75,
      status: "In Progress",
      dueDate: "May 20, 2024",
      tasks: 12,
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Build new features for mobile application",
      progress: 60,
      status: "In Progress",
      dueDate: "Jun 15, 2024",
      tasks: 18,
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Q2 marketing campaign for product launch",
      progress: 40,
      status: "Planning",
      dueDate: "May 30, 2024",
      tasks: 8,
    },
    {
      id: 4,
      name: "E-commerce Platform",
      description: "Develop a new online shopping platform",
      progress: 90,
      status: "In Progress",
      dueDate: "Jul 10, 2024",
      tasks: 15,
    },
    {
      id: 5,
      name: "Data Analytics Dashboard",
      description: "Create analytics dashboard for sales team",
      progress: 30,
      status: "Planning",
      dueDate: "May 18, 2024",
      tasks: 10,
    },
    {
      id: 6,
      name: "Security Audit",
      description: "Security audit and vulnerability assessment",
      progress: 10,
      status: "On Hold",
      dueDate: "Jun 05, 2024",
      tasks: 4,
    },
    {
      id: 7,
      name: "CRM Integration",
      description: "Integrate CRM with existing tools",
      progress: 100,
      status: "Completed",
      dueDate: "Apr 25, 2024",
      tasks: 6,
    },
    {
      id: 8,
      name: "Landing Page Design",
      description: "Design a modern landing page for product launch",
      progress: 100,
      status: "Completed",
      dueDate: "Apr 12, 2024",
      tasks: 9,
    },
    {
      id: 9,
      name: "Inventory Management",
      description: "Build inventory tracking system for warehouse",
      progress: 55,
      status: "In Progress",
      dueDate: "Jul 01, 2024",
      tasks: 14,
    },
    {
      id: 10,
      name: "Payment Gateway",
      description: "Integrate secure online payment system",
      progress: 45,
      status: "In Progress",
      dueDate: "Jun 28, 2024",
      tasks: 11,
    },
    {
      id: 11,
      name: "Blog CMS",
      description: "Create content management system for blog posts",
      progress: 20,
      status: "Planning",
      dueDate: "Jul 08, 2024",
      tasks: 7,
    },
    {
      id: 12,
      name: "Customer Support Portal",
      description: "Build support ticket system for customers",
      progress: 65,
      status: "In Progress",
      dueDate: "Jul 20, 2024",
      tasks: 16,
    },
    {
      id: 13,
      name: "HR Management System",
      description: "Manage employee data, attendance, and leave requests",
      progress: 25,
      status: "Planning",
      dueDate: "Aug 01, 2024",
      tasks: 13,
    },
    {
      id: 14,
      name: "Portfolio Website",
      description: "Personal portfolio website for developer profile",
      progress: 100,
      status: "Completed",
      dueDate: "Mar 30, 2024",
      tasks: 5,
    },
    {
      id: 15,
      name: "Task Automation Tool",
      description: "Automate repeated team workflow tasks",
      progress: 35,
      status: "On Hold",
      dueDate: "Jul 15, 2024",
      tasks: 8,
    },
    {
      id: 16,
      name: "Learning Management System",
      description: "Course dashboard for students and instructors",
      progress: 70,
      status: "In Progress",
      dueDate: "Aug 10, 2024",
      tasks: 20,
    },
    {
      id: 17,
      name: "Appointment Booking App",
      description: "Online appointment booking system for clients",
      progress: 50,
      status: "In Progress",
      dueDate: "Jun 22, 2024",
      tasks: 9,
    },
    {
      id: 18,
      name: "Food Delivery Admin",
      description: "Admin dashboard for food order management",
      progress: 80,
      status: "In Progress",
      dueDate: "Jul 05, 2024",
      tasks: 17,
    },
    {
      id: 19,
      name: "Job Application Tracker",
      description: "Track job applications, interviews, and responses",
      progress: 100,
      status: "Completed",
      dueDate: "Apr 05, 2024",
      tasks: 6,
    },
    {
      id: 20,
      name: "Expense Tracker",
      description: "Track income, expenses, and monthly budget",
      progress: 100,
      status: "Completed",
      dueDate: "Mar 18, 2024",
      tasks: 8,
    },
    {
      id: 21,
      name: "Real Estate Listing",
      description: "Property listing platform with search filters",
      progress: 15,
      status: "Planning",
      dueDate: "Aug 15, 2024",
      tasks: 12,
    },
    {
      id: 22,
      name: "Team Chat UI",
      description: "Frontend design for team messaging interface",
      progress: 5,
      status: "On Hold",
      dueDate: "Sep 01, 2024",
      tasks: 10,
    },
    {
      id: 23,
      name: "Admin Dashboard",
      description: "Admin panel with users, analytics, and reports",
      progress: 85,
      status: "In Progress",
      dueDate: "Jun 30, 2024",
      tasks: 18,
    },
    {
      id: 24,
      name: "Online Quiz App",
      description: "Quiz platform with questions and score tracking",
      progress: 100,
      status: "Completed",
      dueDate: "Feb 28, 2024",
      tasks: 7,
    },
    {
      id: 25,
      name: "Email Template Builder",
      description: "Create reusable email templates for campaigns",
      progress: 35,
      status: "Planning",
      dueDate: "Jul 25, 2024",
      tasks: 9,
    },
    {
      id: 26,
      name: "Restaurant POS System",
      description: "Point of sale system for restaurant orders",
      progress: 50,
      status: "On Hold",
      dueDate: "Aug 05, 2024",
      tasks: 14,
    },
    {
      id: 27,
      name: "Fitness Tracker",
      description: "Track workouts, goals, and progress",
      progress: 100,
      status: "Completed",
      dueDate: "Jan 25, 2024",
      tasks: 6,
    },
    {
      id: 28,
      name: "Travel Planner",
      description: "Plan trips, budgets, and travel schedules",
      progress: 25,
      status: "Planning",
      dueDate: "Aug 20, 2024",
      tasks: 11,
    },
    {
      id: 29,
      name: "Notification System",
      description: "Create notification UI and backend alerts",
      progress: 0,
      status: "Archived",
      dueDate: "Sep 10, 2024",
      tasks: 5,
    },
    {
      id: 30,
      name: "Old Client Portal",
      description: "Previous client dashboard version",
      progress: 100,
      status: "Archived",
      dueDate: "Dec 15, 2023",
      tasks: 13,
    },
  ]);

  const tabs = [
    "All Projects",
    "In Progress",
    "Planning",
    "On Hold",
    "Completed",
    "Archived",
  ];
const deleteProject = (id)=>{
  
  const confirmDelete = window.confirm("Are you sure you want to delete this task?")
  if(!confirmDelete) return;
  const remainingProjects = projects.filter((project)=>(
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
            className={`font-semibold pb-3 cursor-pointer whitespace-nowrap transition ${
              selectedTab === tab
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
          <span className="text-sm text-slate-600 font-semibold">Tasks</span>
          <span className="text-sm text-slate-600 font-semibold">Due Date</span>
          <span className="text-sm text-slate-600 font-semibold">Status</span>
          <span className="text-sm text-slate-600 font-semibold">Actions</span>
        </div>

        {/* project rows */}
        {currentProjects.map((project) => (
          <ProjectTable key={project.id} project={project} Ondelete = {deleteProject} />
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
            className={`px-3 py-1 border rounded-md transition ${
              currentPage === index + 1
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