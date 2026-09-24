import mongoose from "mongoose"
const NotificationSchema = new mongoose.Schema({
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task",
        required:true
    },
    message:{
        type:String,
        required:true
    },
    isRead:{
        type:Boolean,
        required:true,
        default:false
    }
})
const Notification =mongoose.model("Notification", NotificationSchema)
export default Notification