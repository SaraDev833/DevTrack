import User from "../Models/User.js"
import Workspace from "../Models/Workspace.js"
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
        }
     })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"server error"
        })
    }
}
export {registerUser};