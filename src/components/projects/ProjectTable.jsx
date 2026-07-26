
import { Link } from "react-router-dom"
import ProjectDetail from "./ProjectDetail";

const ProjectTable = ({ project, Ondelete , setEditModalOpen , editModalOpen , onEdit}) => {
 const calculateProgress = (tasks=[])=>{
   if(tasks.length === 0){
    return 0
   }
   const completedTasks = tasks.filter((tasks)=>(
    tasks.status === "Completed"
   )).length;
   return Math.round(completedTasks / tasks.length * 100)

 }
 const progress = calculateProgress(project.tasks)
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-5 py-4 border-b border-slate-200 items-center">
      <Link to={`/project-detail/${project.id}`} >
        <h3 className="font-semibold text-slate-900"><span className="lg:hidden">project: </span>{project.name}</h3>
        <p className="text-sm text-slate-500"><span className="lg:hidden font-semibold text-slate-900 ">Description: </span> {project.description}</p>
      </Link>

      <div><span className="lg:hidden font-semibold text-slate-900">Progress: </span> {progress}%</div>

      <div><span className="lg:hidden font-semibold text-slate-900">Team: </span>{project.teamMembers.length}</div>

      <div><span className="lg:hidden font-semibold text-slate-900">Tasks: </span>{project.dueDate}</div>

      <div><span className="lg:hidden font-semibold text-slate-900">Status: </span>{project.status}</div>
  <div className="flex  items-center justify-start gap-2">
      <button onClick={() => Ondelete(project.id)} className="bg-red-700 text-center font-medium text-white px-3 py-1 rounded-md cursor-pointer">
      Delete</button>
      <button onClick={()=>onEdit(project)} className="bg-indigo-700/50 text-center font-medium text-white px-3 py-1 rounded-md cursor-pointer">
       Edit</button>
</div>
    </div>
  );
};
export default ProjectTable