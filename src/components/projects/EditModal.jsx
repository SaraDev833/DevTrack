import { X } from 'lucide-react';
import React, { useState } from 'react'
import teamMembers from '../../data/teamMembers';

const EditModal = ({ setEditModalOpen, project, projects, setProjects }) => {



  const [formData, setFormData] = useState({
    name: project?.name || "",
    description: project?.description || "",
    client: project?.client || "",
    budget: project?.budget || "",
    category: project?.category || "",
    priority: project?.priority || "",
    dueDate: project?.dueDate || "",
    status: project?.status || "Planning",
    teamMembers: project?.teamMembers || [],
  });

  const statuses = [
    "Planning",
    "In Progress",
    "On Hold",
    "Completed",
    "Archived",
  ];
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

  const handleTeamMembers = (name) => {
    if (formData.teamMembers.includes(name)) {
      setFormData({
        ...formData,
        teamMembers: formData.teamMembers.filter(
          (member) => member !== name
        ),
      });
    } else {
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, name],
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.client ||
      !formData.budget ||
      !formData.category ||
      !formData.priority ||
      !formData.dueDate ||
      formData.teamMembers.length === 0
    ) {
      alert("You must fill everything!");
      return;
    }

    const updatedProject = {
      ...project,
      ...formData,
      updatedAt: new Date().toLocaleDateString()

    }

    setProjects([updatedProject, ...projects]);

    setFormData({
      name: "",
      description: "",
      client: "",
      budget: "",
      category: "",
      priority: "",
      dueDate: "",
      status: "Planning",
      teamMembers: [],
    });

    setIsCreateModalOpen(false);
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
            onClick={() => setEditModalOpen(false)}
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
                value={formData.name}
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
                value={formData.client}
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

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              >
                <option ></option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}

              </select>
            </div>



            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Budget
              </label>

              <input
                type="text"
                name="budget"
                value={formData.budget}
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

              <select
                name="priority"
                onChange={handleChange}
                value={formData.priority}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              >

                <option value=""></option>

                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}

              </select>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Status
              </label>

              <select
                name="status"
                onChange={handleChange}
                value={formData.status}
                className="w-full border border-slate-200 rounded-md p-2 outline-none focus:ring-1 focus:ring-indigo-600"
              >

                <option value=""></option>

                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}

              </select>
            </div>



            <div className="w-full sm:w-1/2">
              <label className="text-sm font-medium text-slate-900">
                Due Date
              </label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
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

              {teamMembers.map((member) => (

                <div
                  key={member.id}
                  className="flex items-center gap-2 py-2 px-3 border border-slate-200 rounded-md bg-slate-100"
                >

                  <input
                    type="checkbox"
                    checked={formData.teamMembers.includes(member.name)}
                    onChange={() => handleTeamMembers(member.name)}
                  />


                  <div>
                    <p className="text-sm text-slate-900">
                      {member.name}
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
              value={formData.description}
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
              Edit Project
            </button>

          </div>


        </form>

      </div>
    </div>
  );
};

export default EditModal
