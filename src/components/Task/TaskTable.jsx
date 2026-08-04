import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const TaskTable = ({projects ,selectedTab, setSelectedTab , setProjects , value , setValue}) => {
 
 const [currentPage, setCurrentPage] = useState(1);


const allTasks = projects.flatMap((project)=>(
    project.tasks || []
).map((task)=>(
    {...task,
        projectId:project.id,
        projectName:project.name

    }
)))

const filteredTask = selectedTab === "All Tasks" ?
allTasks : allTasks.filter(task => task.status ===selectedTab);
// search task
const filteredSearchTask = filteredTask.filter((task)=>(
    task.title.toLowerCase().includes(value.toLowerCase())
))
 const projectPerPage = 8;
 const lastIndex = projectPerPage * currentPage;
 const firstIndex = lastIndex - projectPerPage;
  const totalPage = Math.ceil(filteredTask.length / projectPerPage);

 const filteredtaskSlice = filteredSearchTask.slice(firstIndex , lastIndex);
 useEffect(()=>{
  setCurrentPage(1)
 },[value])

const getPriorityStyle=(priority)=>{
    switch(priority){
   case "High":
    return "text-red-600 bg-red-200/50";

   case "Medium":
    return "text-yellow-600 bg-yellow-200/50" ;
    default:
        return "text-green-600 bg-green-200/50"
    }

}
const getStatusStyle=(status)=>{
    switch(status){
   case "To Do":
    return "text-slate-600 bg-slate-200/50";

   case "In Progress":
    return "text-sky-600 bg-sky-200/50" ;
    default:
        return "text-green-600 bg-green-200/50"
    }

}

// delete
const deleteTask = (id)=>{
     const updatedProject = projects.map((project)=>(
        {...project,
            tasks:(project.tasks || []).filter((task)=>(
                task.id !== id
            ))
        }
     ))
     setProjects(updatedProject)
}
  return (
 <div className=" overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      {/* Table Header */}
      <div className="hidden lg:grid lg:grid-cols-[2fr_1.3fr_1.2fr_1fr_1.1fr_1fr_80px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-4">
        <p className="text-sm font-semibold text-slate-600">Task</p>
        <p className="text-sm font-semibold text-slate-600">Project</p>
        <p className="text-sm font-semibold text-slate-600">Assignee</p>
        <p className="text-sm font-semibold text-slate-600">Priority</p>
        <p className="text-sm font-semibold text-slate-600">Status</p>
        <p className="text-sm font-semibold text-slate-600">Due Date</p>
        <p className="text-center text-sm font-semibold text-slate-600">
          Action
        </p>
      </div>

      {/* Table Rows */}
      {filteredtaskSlice.length > 0 ? (
        filteredtaskSlice.map((task) => (
          <div
            key={`${task.projectId}-${task.id}`}
            className="grid grid-cols-1 gap-4 border-b border-slate-100 px-5 py-5 last:border-b-0 hover:bg-slate-50 lg:grid-cols-[2fr_1.3fr_1.2fr_1fr_1.1fr_1fr_80px] lg:items-center"
          >
            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 lg:hidden">
                Task
              </p>

              <h3 className="text-sm font-semibold text-slate-900">
                {task.title}
              </h3>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 lg:hidden">
                Project
              </p>

              <p className="text-sm text-slate-600">
                {task.projectName}
              </p>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 lg:hidden">
                Assignee
              </p>

              <p className="text-sm text-slate-600">
                {task.assignedTo || "Unassigned"}
              </p>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 lg:hidden">
                Priority
              </p>

              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getPriorityStyle(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 lg:hidden">
                Status
              </p>

              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-slate-400 lg:hidden">
                Due Date
              </p>

              <p className="text-sm text-slate-600">
                {task.dueDate || "No date"}
              </p>
            </div>

            <div className="flex lg:justify-center">
              <button
              onClick={()=>deleteTask(task.id)}
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 hover:text-red-600"
                aria-label={`Delete ${task.title}`}
              >
                <Trash2 size={17} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="px-5 py-12 text-center">
          <h3 className="text-base font-semibold text-slate-800">
            No tasks found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Tasks created inside projects will appear here.
          </p>
        </div>
      )}

      {/* pagignation */}
      <div className='flex justify-center gap-2 my-6 flex-wrap'>
         {[...Array(totalPage)].map((_,index)=>(
            <button
             key={index}
             onClick={()=>setCurrentPage(index + 1)}
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
  
}

export default TaskTable
