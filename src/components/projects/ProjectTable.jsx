
import { Link } from "react-router-dom"
import ProjectDetail from "./ProjectDetail";
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectTable = ({ project, Ondelete, setEditModalOpen, editModalOpen, setProjectId }) => {
 
  const [tasks, setTasks] = useState([])


  const projectId = project._id;
  useEffect(() => {
    const getStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:3000/api/get/projectStatus/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setTasks(response.data.tasks)
      } catch (error) {
        console.log(error.response?.data?.message)
      }

    }
    getStatus()
  }, [])
  const calculateProgress = (tasks = []) => {
    if (tasks.length === 0) {
      return 0
    }
    const completedTasks = tasks.filter((tasks) => (
      tasks.status === "Completed"
    )).length;
    return Math.round(completedTasks / tasks.length * 100)

  }
  const getStatusStyle=(status)=>{
    switch(status){
   case "Todo":
    return "text-slate-600 bg-slate-200/50";

   case "In-progress":
    return "text-sky-600 bg-sky-200/50" ;
    default:
        return "text-green-600 bg-green-200/50"
    }

}
  const progress = calculateProgress(tasks);
  const getProjectStatus=(progress)=>{
      if(progress === 0){
        return "Todo"
      }else if(progress === 100){
   return "Completed"
      }else{
    return "In-progress"
      }
  }
const status = getProjectStatus(progress);
  return (
<div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-center py-4 border-b border-slate-200 px-5">

  {/* Project Information */}
  <Link
    to={`/project-detail/${project._id}`}
    className="
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-[2fr_1.5fr_0.8fr_0.8fr_1fr_1fr]
      gap-3 lg:gap-5
      items-center
      rounded-lg
      p-3 -m-3
      transition
      hover:bg-slate-50
    "
  >

    {/* Project Name */}
    <div>
      <span className="lg:hidden text-xs font-semibold text-slate-500 uppercase">
        Project
      </span>
      <h3 className="font-semibold text-slate-900 truncate">
        {project.name}
      </h3>
    </div>

    {/* Description */}
    <div>
      <span className="lg:hidden text-xs font-semibold text-slate-500 uppercase">
        Description
      </span>
      <p className="text-sm text-slate-500 truncate">
        {project.description || "No description"}
      </p>
    </div>

    {/* Progress */}
    <div>
      <span className="lg:hidden text-xs font-semibold text-slate-500 uppercase">
        Progress
      </span>

      <div className="flex items-center gap-2">
        <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-sm font-medium text-slate-700">
          {progress}%
        </span>
      </div>
    </div>

    {/* Team */}
    <div>
      <span className="lg:hidden text-xs font-semibold text-slate-500 uppercase">
        Team
      </span>
      <p className="text-sm text-slate-700">
        {project.teamMembers?.length || 0} members
      </p>
    </div>

    {/* Due Date */}
    <div>
      <span className="lg:hidden text-xs font-semibold text-slate-500 uppercase">
        Due Date
      </span>
      <p className="text-sm text-slate-700">
        {new Date(project.dueDate).toLocaleDateString()}
      </p>
    </div>

    {/* Status */}
    <div>
      <span className="lg:hidden text-xs font-semibold text-slate-500 uppercase">
        Status
      </span>

      <span className={`${getStatusStyle(status)} inline-flex
        px-2.5 py-1
        rounded-full
        text-xs
        font-semibold
        `}>
        {status}
      </span>
    </div>

  </Link>

  {/* Delete Button */}
  <div className="flex justify-end">
    <button
      onClick={(e) => {
        e.preventDefault();
        Ondelete(project._id);
      }}
      className="
        px-3 py-1.5
        rounded-md
        bg-red-600
        text-white
        text-sm
        font-medium
        cursor-pointer
        transition
        hover:bg-red-700
        active:scale-95
      "
    >
      Delete
    </button>
  </div>

</div>
 

  );
};
export default ProjectTable