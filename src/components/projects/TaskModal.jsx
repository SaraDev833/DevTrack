import axios from 'axios'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const TaskModal = ({ closeModal, teamMembers, onAddTask, project }) => {
  const [formData, setFormData] = useState({
    
    
    title: "",
    description: "",
    status: "To Do",
    priority: "",
    assignedTo: "",
    dueDate: "",
    projectId:project._id
  })
  const [members , setMembers] = useState([]);
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
const getMembers= async()=>{
  try {
    const response = await axios.post("http://localhost:3000/api/getTeamMembers",
      {
        teamMembers
      },
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
    
    setMembers(response.data.members)
  } catch (error) {
    console.log(error.response?.data)
  }
}
getMembers()
  },[])
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.assignedTo || !formData.dueDate || !formData.status || !formData.dueDate || !formData.priority || !formData.description) {
      alert("All fields are required");
      return;
    }
    const token = localStorage.getItem("token")
   try {
        const response = await axios.post("http://localhost:3000/api/add/task" , formData , {
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log(response.data)
   } catch (error) {
    console.log(error.response?.data)
   }

    // const newTask = {
    //   id: Date.now(),
    //   name: formData.name,
    //   description: formData.description,
    //   title: formData.title,
    //   status: formData.status,
    //   priority: formData.priority,
    //   assignedTo: formData.assignedTo,
    //   dueDate: formData.dueDate

    // }
    // onAddTask(newTask);
    // setFormData({
    //   title: "",
    //   description: "",
    //   status: "",
    //   priority: "",
    //   assignedTo: "",
    //   dueDate: ""
    // })
  }
  return (

    <div className='fixed inset-0  bg-black/50 backdrop-blur-sm  z-50 flex items-center justify-center'>
      <div className=' bg-white w-150 p-6'>
        <div className="flex justify-between items-center">
          <h3 className='text-lg text-slate-900 font-medium'>Add New Task</h3>
          <X size={20} className='text-slate-700 cursor-pointer' onClick={closeModal} />
        </div>
        <div className='my-3 '>
          <form action="" className='w-full pr-3 flex flex-col gap-3' onSubmit={handleSubmit}>
            {/* title */}
            <div className='flex flex-col gap-1.5 '>
              <label htmlFor="" className='text-sm font-medium text-slate-900'>Title</label>
              <input type="text" placeholder='Enter Project Name' name='title' className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange} />
            </div>

            {/* description */}
            <div className='flex flex-col gap-1.5 '>
              <label htmlFor="" className='text-sm font-medium text-slate-900'>Description</label>
              <textarea type="text" placeholder='Enter Project Name' name='description' className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange} />
            </div>

            {/* priority + status */}
            <div className='flex  items-center w-full gap-3'>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Priority</label>
                <select name="priority" id="" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Status</label>
               <input type="text" value={formData.status} name='status' className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange} />
              </div>
            </div>
            {/* start date and due date */}
            <div className='flex  items-center w-full gap-3'>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Assign To</label>
                <select name="assignedTo" id="" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange}>
                  {members.map((member) => (
                    <option key={member._id} value={member._id}>
                      {member.name}
                    </option>
                  ))}

                </select>
              </div>
              <div className='flex flex-col gap-1.5 w-1/2'>
                <label htmlFor="" className='text-sm font-medium text-slate-900'>Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={closeModal}
                className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-600 font-semibold text-sm cursor-pointer"

              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-3 py-1.5 rounded-md bg-indigo-600 text-white font-semibold text-sm cursor-pointer"
              >
                Add Task
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default TaskModal
