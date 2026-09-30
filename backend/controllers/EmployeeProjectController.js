import Project from "../Models/Project.js";
import Task from "../Models/Task.js";

const myProjects=async(req,res)=>{
const currentUser = req.user.userId;
try {
    const projects = await Project.find({
        teamMembers:currentUser

    })
  const projectWithPercentage = await Promise.all(
         projects.map(async(project)=>{
            const tasks = await Task.find({
                project:project._id
            });
            const totalTasks = tasks.length;
            const completedTasks = tasks.filter(task=>task.status === "completed");
            const percentage = totalTasks.length === 0? 0: Math.round((completedTasks/totalTasks) * 100);
            return{
                ...project.toObject(),
                tasks,
                percentage
            }
         })
  )
    res.status(201).json({
        projects:projectWithPercentage
    })
} catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Failed to fetch your projects"
    })
}

}
export {myProjects}