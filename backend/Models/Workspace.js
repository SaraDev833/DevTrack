import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true

    },
    
})
const workspace = mongoose.model("Workspace" , workspaceSchema);
export default workspace