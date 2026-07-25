import { X } from 'lucide-react'
import React, { useState } from 'react'
import teamMembers from "../../data/teamMembers";

const ProjectModal = ({ setProjects, setIsCreateModalOpen , projects }) => {
  
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        client: "",
        budget: "",
        category: "",
        priority: "",
        dueDate: "",
        status:"Planning",
        teamMembers: [],
    });
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
  const handleTeamMembers = (name) =>{
    if(formData.teamMembers.includes(name)){
        setFormData({
            ...formData , teamMembers:formData.teamMembers.filter((member)=> member !== name)
        })
    }
    else{
        setFormData({...formData , teamMembers:[...formData.teamMembers , name]});
    }
  }
  const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
  });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!formData.name || !formData.description || !formData.client || !formData.budget || !formData.category || !formData.priority || !formData.dueDate || !formData.teamMembers){
        alert("You must fill everything !")
        return;
    }
    const newProject = {
         name: formData.name,
        description: formData.description,
        client: formData.client,
        budget: formData.budget,
        category: formData.category,
        priority: formData.priority,
        dueDate: formData.dueDate,
        status:"Planning",
        teamMembers: formData.teamMembers,
    }
  setProjects([newProject, ...projects]);
    setFormData({
          name: "",
        description: "",
        client: "",
        budget: "",
        category: "",
        priority: "",
        dueDate: "",
        status:"Planning",
        teamMembers: [],
    })
    setIsCreateModalOpen(false)
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
                    <form action="" onSubmit={handleSubmit}>
                        {/*project name + client  */}
                        <div className='flex items-center gap-2 w-full'>
                            <div className='w-1/2'>
                                <label htmlFor="mame" className='text-sm font-medium text-slate-900'>Project Name</label>
                                <input type="text" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='name' onChange={handleChange} />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="client" className='text-sm font-medium text-slate-900'>Client Name</label>
                                <input type="text" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='client' onChange={handleChange}/>
                            </div>
                        </div>
                        {/* category + budget */}
                        <div className='flex items-center gap-2 w-full'>
                            <div className='w-1/2'>
                                <label htmlFor="mame" className='text-sm font-medium text-slate-900'>Category</label>
                                <select name="category" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange}>
                                    <option value=""></option>
                                    {categories.map((category) => (

                                        <option key={category} value={category} className='text-xs' >{category}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="client" className='text-sm font-medium text-slate-900'>Budget</label>
                                <input type="text" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='budget'onChange={handleChange} />
                            </div>
                        </div>
                        {/* priority + duedate */}
                        <div className='flex items-center gap-2 w-full'>
                            <div className='w-1/2'>
                                <label htmlFor="priority" className='text-sm font-medium text-slate-900'>Priority</label>
                                <select name="priority" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' onChange={handleChange}>
                                    <option value=""></option>
                                    {priorities.map((priority) => (

                                        <option 
                                        key={priority}
                                        value={priority} className='text-xs' >{priority}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="duedate" className='text-sm font-medium text-slate-900'>Due Date</label>
                                <input type="date" className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' name='dueDate'onChange={handleChange} />
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
                                   checked ={formData.teamMembers.includes(member.name)}
                                   onChange={()=>handleTeamMembers(member.name)}
                                   />
                                 <div>
                                    <p className='text-sm text-slate-900 '>{member.name}</p>
                                    <span className='text-slate-500 text-xs '>{member.role}</span>
                                 </div>
                            </div>
                     ))}
                     </div>

                        </div>
                        {/* description */}
                               <div className='w-full'>
                                <label htmlFor="mame" className='text-sm font-medium text-slate-900'>Description</label>
                           <textarea name="description"  className='w-full border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600 rounded-md p-1 placeholder:text-xs placeholder:text-slate-500 placeholder:font-medium' placeholder='Description' onChange={handleChange}></textarea>
                            </div>

                            <button type='submit'>Create Project</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
