import Project from "../Models/Project.js";

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
  const newProject = await Project.create({
        name,
        description,
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
export default CreateProject