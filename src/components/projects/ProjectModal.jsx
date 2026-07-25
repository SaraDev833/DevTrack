import { X } from 'lucide-react'
import React, { useState } from 'react'
import teamMembers from "../../data/teamMembers";

const ProjectModal = ({ setProjects, setIsCreateModalOpen }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        client: "",
        budget: "",
        category: "",
        priority: "",
        dueDate: "",
        teamMembers: [],
    });
    console.log(formData)
    const categories = [
        "Web Development",
        "Mobile App",
        "Marketing",
        "E-commerce",
        "Dashboard",
        "CMS",
        "Education Platform",
        "Finance App",
        "Booking System",
    ];

    const priorities = ["High", "Medium", "Low"];

    const statuses = [
        "Planning",
        "In Progress",
        "On Hold",
        "Completed",
        "Archived",
    ];
    const HandleTeamMember = (member)=>{
   if(formData.teamMembers.includes(member)){
    setFormData({
        ...formData, teamMembers:formData.teamMembers.filter((name)=>(
           name !== member
        ))
    })
   }
   else{
    setFormData({...formData , teamMembers:[...formData.teamMembers , member]})
   }
    }
    return (
        <div className='inset-0 fixed bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center'>
            <div className='bg-white p-6 w-150'>
                <div className='flex justify-between items-center mb-6'>
                    <h3 className='text-lg text-slate-900 font-medium flex flex-col gap-1'>Create New Project
                        <span className='text-xs text-slate-400'>Add a new project and assign by details</span>
                    </h3>
                    <X size={20} className='text-slate-700 cursor-pointer' onClick={() => setIsCreateModalOpen(false)} />
                </div>
                <div>
                    <form action="" >
                        {/*project name + client  */}
                        <div className='flex items-center gap-2 w-full'>
                            <div className='w-1/2'>
                                <label htmlFor="mame" className='text-sm font-medium text-slate-900'>Project Name</label>
                                <input type="text" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='name' />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="client" className='text-sm font-medium text-slate-900'>Client Name</label>
                                <input type="text" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='client' />
                            </div>
                        </div>
                        {/* category + budget */}
                        <div className='flex items-center gap-2 w-full'>
                            <div className='w-1/2'>
                                <label htmlFor="mame" className='text-sm font-medium text-slate-900'>Category</label>
                                <select name="category" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' >
                                    <option value=""></option>
                                    {categories.map((category) => (

                                        <option value="" className='text-xs'>{category}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="client" className='text-sm font-medium text-slate-900'>Budget</label>
                                <input type="text" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='budget' />
                            </div>
                        </div>
                        {/* priority + duedate */}
                        <div className='flex items-center gap-2 w-full'>
                            <div className='w-1/2'>
                                <label htmlFor="priority" className='text-sm font-medium text-slate-900'>Priority</label>
                                <select name="category" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' >
                                    <option value=""></option>
                                    {priorities.map((priority) => (

                                        <option value="" className='text-xs'>{priority}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="duedate" className='text-sm font-medium text-slate-900'>Due Date</label>
                                <input type="date" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='dueDate' />
                            </div>
                        </div>
                        {/* team members */}
                        <div>
                            <label className="text-sm font-medium text-slate-900">
                                Team Members
                            </label>
                     <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3'>
                     {teamMembers.map((member)=>(
                        <div key={member.id} className='flex items-center gap-2 py-1 px-2 border border-slate-200  rounded-md shadow-sm bg-slate-100'>
                                 <input type="checkbox"
                                 value={member.name}
                                 checked = {formData.teamMembers.includes(member.name)}
                                 onChange={()=>HandleTeamMember(member.name)}
                                 />
                                 <div>
                                    <p className='text-sm texy-slate-900 '>{member.name}</p>
                                    <span className='text-slate-500 text-xs '>{member.role}</span>
                                 </div>
                            </div>
                     ))}
                     </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
