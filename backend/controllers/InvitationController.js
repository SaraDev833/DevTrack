import Invitation from "../Models/Invitation.js";
import crypto from "crypto";
import User from "../Models/User.js";
import workspace from "../Models/Workspace.js";
import WorkspaceMember from "../Models/WorkspaceMember.js";
import sendInvitationEmail from "../utils/SendMail.js";

const invitation =async(req, res)=>{
  const {
    email , position , userType
  } = req.body;
 if(!email || !position || !userType){
  return res.status(400).json({
    message:"please fill in all the fields"
  })
 }
 const exisitingUser = await User.findOne({email});
 if(exisitingUser){
  return res.status(401).json({
    message:"The person you are inviting already exists"
  })
 }
const userId = req.user.userId;
const member = await WorkspaceMember.findOne({user:userId});
if(!member){
  return Response.json({
    message:"You are not a member of workspace"
  })

}
if(member.userType !== "owner" && member.userType !== "admin"){
  return res.status(401).json({
    message:"you are not allowed to invite"
  })

}
const token = crypto.randomBytes(32).toString("hex");

const Invite = await Invitation.create({
  email,
  workspace:member.workspace,
  invitedBy:userId,
  userType,
  position,
  token,
   expiresAt: new Date(
   Date.now() + 24 * 60 * 60 * 1000
      )

  
})

const invitationLink =
  `http://localhost:5173/register?invitation=${token}`;
const workspaceName = await workspace.findById(member.workspace);

sendInvitationEmail(
  Invite.email,
  invitationLink,
  workspaceName.name
)
}


export default invitation