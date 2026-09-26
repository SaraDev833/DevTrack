import User from "../Models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import WorkspaceMember from "../Models/WorkspaceMember.js"
import Workspace from "../Models/Workspace.js"
import Invitation from "../Models/Invitation.js"
const registerUser = async ( req, res) =>{
    try {
        const {
          name,
          workspace,
          email,
          password,
          confirmPassword,
          terms

        } = req.body;

        if(!name || !email || !workspace || !password || !confirmPassword ){
            return res.status(400).json({
                message: "Please fill in all required fields"
            })
        }
        if(password !== confirmPassword){
            return res.status(400).json({
                message:"Passwords do not match"
            })
        }
        if(!terms){
            return res.status(400).json({
                message : "You must agree to the terms and privacy policy"
            })
        }
        const exisitingUser = await User.findOne({email});
        if(exisitingUser ){
            return res.status(400).json({
                message: "This user already exists"
            })
        }
        const user = await User.create({
            name,
            email, 
            password
        })
     const newworkspace = await Workspace.create({
        name : workspace,
        owner: user._id
     })

     const workspaceMember = await WorkspaceMember.create({
        user: user._id,
        workspace:newworkspace._id,
        userType:"owner",
        position:"owner of the workspace"
     })
     res.status(201).json({
        message:"Account created successfully",
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        },
        workspace:{
            id:newworkspace._id,
            name:newworkspace.name,
            owner:newworkspace.owner
        },
        workspacemember:{
            position:workspaceMember.position
        }
     })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"server error"
        })
    }
}

const inviteUserRegister=async(req, res)=>{
    try {
        const {
         name,
          email,
          password,
          confirmPassword,
          terms, 
          invitationToken

    }= req.body;
    if(!name || !email || !password || !confirmPassword){
        return res.status(401).json({
            message: "You need to fill all the required fields"
        })
    }
    if(!terms){
        return res.status(401).json({
            message:"You must agree to the terms and policy"
        })
    }

    const exisitingUser = await User.findOne({email})
    if(exisitingUser){
        return res.status(401).json({
            message:"This user already exists"
        })
    }
    if(password !==confirmPassword){
        return res.status(401).json({
            message:"passwords do not match"
        })
    }

    const user = await User.create({
        name,
        email ,
        password
    })
    const Invited = await Invitation.findOne({ token: invitationToken,
  status: "pending"});
    if(!Invited){
        return res.status(401).json({
            message:"Invalid invitation token or expired"
        })
    }
   const newMember = await WorkspaceMember.create({
       user:user._id,
       workspace:Invited.workspace,
       userType:Invited.userType,
       position:Invited.position
   })
   Invited.status = "active";
   await Invited.save();
   return res.status(201).json({
    message:"Account created and invitation accepted",
    user:{
        name:user.name,
        email:user.email
    },
  
   })
    } catch (error) {
        console.log(error)
    }



}
const loginUser = async(req, res)=>{
    const {
        email,
        password
    } = req.body

    try {
        if(!email ||!password ){
        return res.json({
            message: "please fill all the required fields"
        })

    }
    const user =await  User.findOne({email});
    if(!user){
        return res.json({
            message:"Email not found"
        })
        alert("Ëmail not found")
    }
    const isPassCorrect = await bcrypt.compare(password , user.password)
    if(!isPassCorrect){
        return res.json({
            message:"Invalid password"
        })
        alert("Invalid Password")
    }
    // creating jwt
    const token = jwt.sign(
        {
          userId : user._id,
        },
        
            process.env.JWT_SECRET,
            {
      expiresIn : "7d",
            }
    )
    res.status(200).json({
        token,
        user:{
            email: user.email,
           
        }
    })
    } catch (error) {
         console.log(error)
    }
    
}
const getActiveMembers =async(req, res)=>{
      const currentUser = req.user.userId;
       const member = await WorkspaceMember.findOne({
           user:currentUser
       })
       if(!member){
        return res.json({
            message:"Member not found"
        })
       }
       const activeMembers = await Invitation.find({
        workspace:member.workspace,
        status:"active"
       });
     
       return res.json({
        activeMembers
       })
}
export {registerUser, loginUser ,inviteUserRegister, getActiveMembers};