import mongoose from "mongoose"
const TaskSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum:["Todo" , "In-progress" , "Completed"],
        default:"Todo"
    },
    priority:{
        type:String,
        enum:["Low" , "Medium" , "High"],
        required:true
    },
    dueDate:{
        type:Date,
        default:null
    }
})
const Task = mongoose.model("Task" , TaskSchema);
export default Task