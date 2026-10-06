import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import DashboardEmployee from "./pages/employee/DashboardEmployee"
import DashboardLayout from "./components/DashboardLayout"
import Projects from "./pages/Projects"
import ProjectDetail from "./components/projects/ProjectDetail"
import Team from "./pages/Team"
import Task from "./pages/Task"
import Notification from "./pages/Notification"
import Profile from "./pages/Profile"
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext"
import TaskEmployee from "./pages/employee/TaskEmployee"
import ProtectedRoute from "../backend/protectedRoute/ProtectedRoute"
import { Bounce, ToastContainer } from "react-toastify"



function App() {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}

      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail/:id" element={<ProjectDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/task" element={<Task />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-dashboard" element={<DashboardEmployee />} />
            <Route path="/my-tasks" element={<TaskEmployee />} />
            <Route path="/my-notifications" element={<Notification />} />

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
