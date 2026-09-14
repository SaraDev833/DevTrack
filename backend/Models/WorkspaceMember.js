import mongoose from "mongoose";


const WorkspaceMemberSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    workspace:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Workspace",
        required:true
    },
    userType:{
        type:String,
        enum:["owner" , "admin", "employee"],
        default:"employee"
    },
    position:{
        type:String,
        required:true
    },
  
})
const WorkspaceMember = mongoose.model("WorkspaceMember" , WorkspaceMemberSchema);

export default WorkspaceMember