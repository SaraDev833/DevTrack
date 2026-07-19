import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import DashboardLayout from "./components/DashboardLayout"
import Projects from "./pages/Projects"



function App() {
  
  return (
    <>
   <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/signin" element={<Login/>}/>
  
    <Route element={<DashboardLayout/>}>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/projects" element={<Projects/>}/>
  
</Route>
   </Routes>
    </>
  )
}

export default App
