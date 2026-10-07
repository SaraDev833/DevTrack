import React, { useEffect, useState } from 'react'
import Navbar from '../common/Navbar'
import { useOutletContext } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ProjectKanban from './ProjectKanban'
import TotalProjectBoard from './TotalProjectBoard'
import ProjectDivide from './ProjectDivide'
import ProjectModal from './ProjectModal'
import axios from 'axios'

const ProjectDetail = () => {
  const token = localStorage.getItem("token");

  const [tasks, setTasks] = useState([]);
  const [project, setProject] = useState(null); const { isCreateModalOpen, setIsCreateModalOpen, projects, setProjects } = useOutletContext()
  const { id } = useParams()

  //     const project = projects.find((p) => {
  //   return p._id === id;
  // });
  const projectId = id;
  useEffect(() => {
    const getProject = async () => {
      try {

        const response = await axios.get(`http://localhost:3000/api/get/selectedProject/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setProject(response.data.editProject)
      } catch (error) {
        console.log(error)
      }
    }
    getProject()
  }, [projectId])
  useEffect(() => {
    const getTasks = async () => {
      try {

        const response = await axios.get(`http://localhost:3000/api/get/projectStatus/${projectId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setTasks(response.data.tasks)
      } catch (error) {
        console.log(error.response?.data?.message)
      }

    }
    getTasks()
  }, [projectId])
  const calculateProgress = (tasks = []) => {
    if (tasks.length === 0) {
      return 0
    }
    const completedTasks = tasks.filter((tasks) => (
      tasks.status === "Completed"
    )).length;
    return Math.round(completedTasks / tasks.length * 100)

  }

  const progress = calculateProgress(tasks);
  const getProjectStatus = (progress) => {
    if (progress === 0) {
      return "Todo"
    } else if (progress === 100) {
      return "Completed"
    } else {
      return "In-progress"
    }
  }
  const status = getProjectStatus(progress);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-slate-500">Loading project...</p>
      </div>
    );
  }

  return (
    <div className='w-full min-w-0 bg-slate-100 space-y-6'>
      <Navbar title="Project Details" description="Track project progress , tasks and team activity" isCreateModalOpen={isCreateModalOpen}
        setIsCreateModalOpen={setIsCreateModalOpen} />
      {/* rendering create project modal  */}
      {isCreateModalOpen && (<ProjectModal setProjects={setProjects} setIsCreateModalOpen={setIsCreateModalOpen} projects={projects} />)}
      <ProjectKanban project={project} status={status} progress={progress} />
      <TotalProjectBoard tasks={tasks} progress={progress}/>
      <ProjectDivide project={project} tasks={tasks}/>
    </div>
  )
}

export default ProjectDetail
