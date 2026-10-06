
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
const userName = await User.findOne({
  _id : assignedTo
})
  if(assignedTo){
    const notification = await Notification.create({
        recipient: assignedTo,
        task:newTask._id,
        message:`${userName.name},you  have been assigned with ${newTask.title}`,

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
const deleteTask = async(req, res)=>{
  const taskId = req.params.id;
  const currentUser = req.user.userId;
  const task = await Task.findById(taskId);
  if(!task){
    return res.json({
      message:"Task not found"
    })
  }
  if(task.createdBy.toString() !== currentUser){
    return res.json({
        message:"You can not delete this task"
      })
    
  }
  await Task.findByIdAndDelete(taskId);
  res.json({
    message:"Task deleted successfully"
  })
}
const deleteProject = async(req,res)=>{
try {
    const projectId= req.params.id;
  const currentUser = req.user.userId;
  const project = await Project.findById(projectId);
  if(!project){
    return res.json({
      message:"Project not found"
    })
  }
  if(project.createdBy.toString() !== currentUser){
    return res.json({
      message:"You can not delete this project"
    })
  }
  await Project.findByIdAndDelete(projectId);
  const projects = await Project.find({
    createdBy:currentUser
  })
  res.status(201).json({
    message:"Project deleted successfully!"
  })
} catch (error) {
  console.log(error)
}
}
const selectedProjectForEdit= async(req,res)=>{
 try {
  const projectId = req.params.projectId;
 const editProject = await Project.findById(projectId);
 if(!editProject){
  res.json({
    message:"Project is not found"
  })
 }
 res.json({
  editProject
 })
 } catch (error) {
  console.log(error)
  res.json({
    message:"There is something wrong!"
  })
 }
}
export  {CreateProject , getProjects , getTeamMembers, addTask , allTasks, deleteTask, deleteProject,selectedProjectForEdit}