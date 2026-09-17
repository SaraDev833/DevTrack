import WorkspaceMember from "../Models/WorkspaceMember.js";

const MembersController = async (req, res)=>{
try {
    const userId = req.user.userId;
const member = await WorkspaceMember.findOne({
    user: userId
})
if(!member){
    return  res.json({
        message: "Workspace member not found"
    })
}
const MembersInfo = await WorkspaceMember.find({
    workspace:member.workspace
}).populate("user")
return res.status(200).json({
    MembersInfo
})
} catch (error) {
    console.log(error)
}
}
export default  MembersController