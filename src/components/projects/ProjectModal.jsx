import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import teamMembers from "../../data/teamMembers";
import axios from "axios";

const ProjectModal = ({ setProjects, setIsCreateModalOpen, projects }) => {
  const [workspaceMembers , setworkspaceMembers] = useState([])

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

  useEffect(()=>{
  const getMembers =async()=>{
    const token = localStorage.getItem("token");
   try {
     const response = await axios.get("http://localhost:3000/api/workspace-member" , {
        headers:{
          Authorization:`Bearer ${token}`
        }
    })
   setworkspaceMembers(response.data.MembersInfo)
   } catch (error) {
    console.log(error.response?.data)
   }
  }
  getMembers()
  },[])
const handleTeamMembers=(userId)=>{
  setFormData((prev)=>{
    if(prev.teamMembers.includes(userId)){
       return{
        ...prev,
         teamMembers: prev.teamMembers.filter(
          (id) => id !== userId
        ),
       }
    }
    return {
  ...prev,
  teamMembers: [...prev.teamMembers, userId],
};
  })

}
  // const categories = [
  //   "Web Development",
  //   "Mobile App",
  //   "Marketing",
  //   "E-commerce",
  //   "Dashboard",
  //   "CMS",
  //   "Education Platform",
  //   "Finance App",
  //   "Booking System",
  // ];

  // const priorities = ["High", "Medium", "Low"];

  // const handleTeamMembers = (name) => {
  //   if (formData.teamMembers.includes(name)) {
  //     setFormData({
  //       ...formData,
  //       teamMembers: formData.teamMembers.filter(
  //         (member) => member !== name
  //       ),
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       teamMembers: [...formData.teamMembers, name],
  //     });
  //   }
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const token = localStorage.getItem("token")
    try {
          const response = await axios.post("http://localhost:3000/api/create/project" , formData , {
            headers:{
              Authorization: `bearer ${token}`
            }
          })
        
           console.log(response.data)
           
    // setIsCreateModalOpen(false);
        setFormData({
      name: "",
      description: "",
      client: "",
      budget: "",
      category: "",
      priority: "",
      dueDate: "",
      teamMembers: [],
    });
    } catch (error) {
      console.log(error.response?.data)
    }
    

  

  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-[95%] sm:w-[90%] md:w-[650px] max-h-[90vh] overflow-y-auto rounded-lg p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg text-slate-900 font-medium flex flex-col gap-1">
            Create New Project
            <span className="text-xs text-slate-400">
              Add a new project and assign details
            </span>
          </h3>

          <X
            size={20}
            className="text-slate-700 cursor-pointer"
            onClick={() => setIsCreateModalOpen(false)}
          />
        </div>


        <form onSubmit={handleSubmit}>

          {/* Name + Client */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Project Name
              </label>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>


            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Client Name
              </label>

              <input
                type="text"
                name="client"
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>

          </div>



          {/* Category + Budget */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">

            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Category
              </label>
   <input
                type="text"
                name="category"
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              />
         
            </div>



            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Budget
              </label>

              <input
                type="text"
                name="budget"
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>

          </div>




          {/* Priority + Date */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">

            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Priority
              </label>

          <input
                type="text"
                name="priority"
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>



            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>

          </div>





          {/* Team Members */}
          <div className="mb-4">

            <label className="text-sm font-medium text-slate-900">
              Team Members
            </label>


            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">

              {workspaceMembers.map((member) => (

                <div
                  key={member.user._id}
                  className="flex items-center gap-2 py-2 px-3 border border-slate-200 rounded-md bg-slate-100"
                >

                  <input
                    type="checkbox"
                    checked={formData.teamMembers.includes(member.user._id)}
                    onChange={() => handleTeamMembers(member.user._id)}
                  />


                  <div>
                    <p className="text-sm text-slate-900">
                      {member.user.name}
                    </p>

                    <span className="text-xs text-slate-500">
                      {member.role}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>





          {/* Description */}
          <div className="mb-4">

            <label className="text-sm font-medium text-slate-900">
              Description
            </label>

            <textarea
              name="description"
              rows={4}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600 resize-none"
              placeholder="Description"
            />

          </div>




          {/* Button */}
          <div className="flex justify-end">

            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition"
            >
              Create Project
            </button>

          </div>


        </form>

      </div>
    </div>
  );
};

export default ProjectModal;