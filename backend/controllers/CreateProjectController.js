import Project from "../Models/Project.js";
import workspace from "../Models/Workspace.js";
import WorkspaceMember from "../Models/WorkspaceMember.js";

const CreateProject = async ( req , res)=>{
    const {
        name,
        description,
        client,
        budget,
        category,
        priority,
        dueDate,
        teamMembers
    } = req.body;
    if(!name || !description || !client || !budget || !category || !priority || !dueDate || !teamMembers){
        return res.status(401).json({
            message:"you must fill all the fields"
        })
    }
    const createdBy = req.user.userId;
    const workspaceMember = await WorkspaceMember.findOne({
        user:createdBy
    })
  const newProject = await Project.create({
        name,
        description,
        createdBy,
        workspace:workspaceMember.workspace,
        client,
        budget,
        category,
        priority,
        dueDate,
        teamMembers
  })
  return res.status(201).json({
    message:"project created successfully",
    project:{
        name:newProject.name,
        description:newProject.description
    }
  })
}
const getProjects = async(req, res)=> {
    const currentUser = req.user.userId;
     const workspacemem = await WorkspaceMember.findOne({
        user:currentUser
     });
     const projects = await Project.find({
        workspace:workspacemem.workspace
     })
     return res.json({
        projects
     })
}
export  {CreateProject , getProjects}