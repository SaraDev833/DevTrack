
import User from "../Models/User.js"
import Project from "../Models/Project.js";
import workspace from "../Models/Workspace.js";
import WorkspaceMember from "../Models/WorkspaceMember.js";
import Task from "../Models/Task.js";
import Notification from "../Models/Notification.js";

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
const getTeamMembers = async (req, res)=>{
try {
     const {teamMembers} = req.body
 const members = await User.find({
    _id: {$in:teamMembers}
 })

 res.json({
    members
 })
 
} catch (error) {
    console.log(error)
}

}
const addTask=async(req , res) =>{
    const{
        title,
        description,
        assignedTo,
        priority,
        dueDate,
        projectId
    } = req.body;
  if(!title || !description || !assignedTo || !priority || !dueDate || !projectId){
    return res.status(401).json({
        message:"you must fill all the fields"
    })
  }
  const user = req.user.userId;
  const project = await Project.findById(
    projectId
  )
  if(!project){
    res.json({
        message:"Project not found"
    })
  }

  const newTask = await Task.create({
    title,
    description,
    project:project._id,
    assignedTo,
    createdBy:user,
    priority,
    dueDate
  })

  if(assignedTo){
    const notification = await Notification.create({
        recipient: assignedTo,
        task:newTask._id,
        message:`You have been assigned with ${newTask.title}`,

    })
  }
  res.status(201).json({
    message:"Task created successfully",
    task:{
        title:newTask.title
    }
  })
}
const allTasks = async(req, res)=>{
try {
      const user = req.user.userId;
    const tasks = await Task.find({
      createdBy:user
    }).populate("project" , "name")
      .populate("assignedTo" , "name");
  
    res.json({
    tasks
    })
} catch (error) {
  console.log(error);

    return res.status(500).json({
      message: "Server error"
    });
  
}
}
export  {CreateProject , getProjects , getTeamMembers, addTask , allTasks}