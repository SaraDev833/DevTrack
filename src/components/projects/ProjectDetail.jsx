import React from 'react'
import Navbar from '../common/Navbar'
import projects from '../../data/ProjectData'
import { useParams } from 'react-router-dom'
import ProjectKanban from './ProjectKanban'
import TotalProjectBoard from './TotalProjectBoard'
import ProjectDivide from './ProjectDivide'

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => (
        p.id === Number(id)
    ))
   
    return (
        <div className='w-full min-w-0 bg-slate-100 space-y-6'>
            <Navbar title="Project Details" description="Track project progress , tasks and team activity" />
        <ProjectKanban project ={project}/>
        <TotalProjectBoard project ={project}/>
        <ProjectDivide project = {project}/>
        </div>
    )
}

export default ProjectDetail
