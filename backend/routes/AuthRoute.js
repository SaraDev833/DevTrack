import express from "express"
import { registerUser , loginUser, inviteUserRegister, getActiveMembers } from "../controllers/AuthController.js";
import invitation from "../controllers/InvitationController.js";
import Authmiddleware from '../Middleware/Authmiddleware.js'
import  MembersController  from "../controllers/MembersController.js";
import {CreateProject, getProjects, getTeamMembers, addTask , allTasks} from "../controllers/CreateProjectController.js";
const router= express.Router();

router.post("/auth/register" , registerUser);
router.post("/auth/login" , loginUser)
router.post("/invite-register" , inviteUserRegister)

router.post("/send/invitation",Authmiddleware ,invitation)
router.get("/workspace-member", Authmiddleware , MembersController)
router.post("/create/project", Authmiddleware , CreateProject)
router.get("/all/projects", Authmiddleware , getProjects)
router.post("/getTeamMembers" , Authmiddleware, getTeamMembers);
router.post("/add/task" , Authmiddleware, addTask);
router.get("/all/tasks", Authmiddleware , allTasks);
router.get("/active/members", Authmiddleware , getActiveMembers)
export default router;