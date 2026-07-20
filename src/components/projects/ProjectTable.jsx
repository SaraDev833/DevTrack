
import { Link } from "react-router-dom"
import ProjectDetail from "./ProjectDetail";

const ProjectTable = ({ project, Ondelete }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-5 py-4 border-b border-slate-200 items-center">
      <Link to={`/project-detail/${project.id}`} >
        <h3 className="font-semibold text-slate-900"><span className="lg:hidden">project: </span>{project.name}</h3>
        <p className="text-sm text-slate-500"><span className="lg:hidden font-semibold text-slate-900 ">Description: </span> {project.description}</p>
      </Link>

      <div><span className="lg:hidden font-semibold text-slate-900">Progress: </span> {project.progress}%</div>
      <div><span className="lg:hidden font-semibold text-slate-900">Team: </span>{project.teamMembers.length}</div>
      <div><span className="lg:hidden font-semibold text-slate-900">Tasks: </span>{project.dueDate}</div>
      <div><span className="lg:hidden font-semibold text-slate-900">Status: </span>{project.status}</div>
      <div onClick={()=>Ondelete(project.id)} className="text-red-600 font-bold cursor-pointer"><span className="lg:hidden font-semibold text-slate-900">Action: </span >Delete</div>
    </div>
  );
};
export default ProjectTable