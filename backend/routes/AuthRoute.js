import express from "express"
import { registerUser, loginUser, inviteUserRegister, getActiveMembers, removeTeamMember, getPendingMembers, removeInvitation, updateProfile,currentUser, changePassword } from "../controllers/AuthController.js";
import invitation from "../controllers/InvitationController.js";
import Authmiddleware from '../Middleware/Authmiddleware.js'
import MembersController from "../controllers/MembersController.js";
import { CreateProject, getProjects, getTeamMembers, addTask, allTasks, deleteTask } from "../controllers/CreateProjectController.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");

    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
})

const upload = multer({ storage });

router.post(
    "/update-profile",
    Authmiddleware,
    upload.single("image"),
    updateProfile
);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser)
router.post("/invite-register", inviteUserRegister)
router.get("/current-user-profile", Authmiddleware, currentUser)
router.post("/send/invitation", Authmiddleware, invitation)
router.get("/workspace-member", Authmiddleware, MembersController)
router.post("/create/project", Authmiddleware, CreateProject)
router.get("/all/projects", Authmiddleware, getProjects)
router.post("/getTeamMembers", Authmiddleware, getTeamMembers);
router.post("/add/task", Authmiddleware, addTask);
router.get("/all/tasks", Authmiddleware, allTasks);
router.delete("/delete/task/:id", Authmiddleware, deleteTask)
router.get("/active/members", Authmiddleware, getActiveMembers);
router.get("/pending/members", Authmiddleware, getPendingMembers);
router.delete("/remove/member/:id", Authmiddleware, removeTeamMember);
router.delete("/remove/invitation/:id", Authmiddleware, removeInvitation);
router.put("/change-password", Authmiddleware, changePassword)
export default router;