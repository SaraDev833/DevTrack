const InvitationSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required: true
    },
    workspace:{
        type:mongoose.Schema.Types.objectId,
        ref:"Workspace",
        required:true
    },
    invitedBy:{
        type:mongoose.Schema.Types.objectId,
        ref:"User",
        required:true
    },
    userType:{
        type:String,
        enum:["admin" , "employee"],
        default:"employee"
    },
    position:{
       type:String,
       required:true
    },
    status:{
        type:String,
        required:true,
        default:"pending"
    },
    token:{
        type:String,
        required:true,
        unique:true
    },
    expiresAt:{
        type:Date
    }
})
const Invitation = new mongoose.model("Invitation" , InvitationSchema)
export default Invitation