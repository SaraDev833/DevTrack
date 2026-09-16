import mongoose from "mongoose"
const ProjectSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true,
    trim :true
  },
  workspace:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Workspace",
    required:true
  },
  createdBy:{
    type:String,
    required:true,
    trim:true
  },
  client:{
    type:String,
    required:true,
    trim:true
  },
  budget:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true
  },
  priority:{
    type:String,
    required:true
  },
  dueDate:{
    type:Date,
    required:true
  },
teamMembers:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    }
]
})
const project = mongoose.model("Project" , ProjectSchema);
export default project