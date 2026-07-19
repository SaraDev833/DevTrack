import React from 'react'
import Navbar from '../components/common/Navbar'

const Projects = () => {
const projects = [
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
    name: "CRM Integration",
    description: "Integrate CRM with existing tools",
    progress: 100,
    status: "Completed",
    dueDate: "Apr 25, 2024",
    tasks: 6,
  },
  {
    id: 5,
    name: "Security Audit",
    description: "Security audit and vulnerability assessment",
    progress: 10,
    status: "On Hold",
    dueDate: "Jun 05, 2024",
    tasks: 4,
  },
];
const tabs = [
  "All Projects",
  "In Progress",
  "Planning",
  "On Hold",
  "Completed",
];
  return (
    <div className='w-full min-w-0 bg-slate-100 space-y-6'>
       <Navbar title="Projects" description="View and manage all your projects in one place"/>
      <div className="my-6">
                <button></button>
      </div>
    </div>
  )
}

export default Projects
