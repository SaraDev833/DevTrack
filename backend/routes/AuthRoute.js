import express from "express"
import { registerUser , loginUser, inviteUserRegister } from "../controllers/AuthController.js";
import invitation from "../controllers/InvitationController.js";
import Authmiddleware from '../Middleware/Authmiddleware.js'
const router= express.Router();

router.post("/auth/register" , registerUser);
router.post("/auth/login" , loginUser)
router.post("/invite-register" , inviteUserRegister)

// invitationRoute
router.post("/invitation",Authmiddleware ,invitation)
export default router;