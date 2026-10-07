import React, { useEffect, useState } from 'react'
import Man2 from "../../assets/man-1.jfif"
import axios from 'axios';
const ProjectInfo = ({ project }) => {

    const projectCreator = project.createdBy;
    const[user, setUser] = useState(null);
  
    useEffect(()=>{
       const token = localStorage.getItem("token");
      const getUser = async()=>{
   try {
        const response = await axios.get(`http://localhost:3000/api/get/createdBy/userInfo/${projectCreator}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
       setUser(response.data.user)
       } catch (error) {
        console.log(error.response?.data?.message)
       }
      }
      getUser()
    },[project])
   if(!user){
      return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-slate-500">Loading user...</p>
      </div>
    );
   }
    return (
        <div className='flex flex-col gap-8'>
            <div className='client'>
                <h5 className='text-sm text-slate-400 font-bold'>Client</h5>
                <p className='text-slate-700 text-lg font-semibold'>{project.client}</p>
            </div>
            <div className='budget'>
                <h5 className='text-sm text-slate-400 font-bold'>Budget</h5>
                <p className='text-slate-700 text-lg font-semibold'> {project.budget}</p>
            </div>
            <div className='category'>
                <h5 className='text-sm text-slate-400 font-bold'>Category</h5>
                <p className='text-slate-700 text-lg font-semibold'>{project.category}</p>
            </div>
            <div className='desc'>
                <h5 className='text-sm text-slate-400 font-bold'>Description</h5>
                <p className='text-slate-700 text-lg font-semibold'>{project.description}</p>
            </div>
            <div className='created flex flex-col gap-1'>
                <h5 className='text-sm text-slate-400 font-bold'>Created By</h5>
                <div className='flex items-center gap-2'>
              <img src={`http://localhost:3000${user.avater}`}alt="" className='object-cover h-10 w-10 rounded-full  object-top'/>

                    <p className='text-slate-700 text-lg font-semibold' >{user.name}</p>
                </div>

            </div>
            <div className='createdAt'>
                <h5 className='text-sm text-slate-400 font-bold'>Created at</h5>
                <p className='text-slate-700 text-lg font-semibold'>{project.createdAt}</p>
            </div>

        </div>
    )
}

export default ProjectInfo
