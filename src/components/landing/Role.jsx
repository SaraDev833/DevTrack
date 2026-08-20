import { CircleCheckBig } from 'lucide-react'
import { motion } from "framer-motion"
import React from 'react'

const Role = () => {
    const roles = [
        {
            role: "Owner/CEO",
            desc: "Get complete visibility over your business",
            tasks: [
                "Team performance",
                "Project overview",
                "Reports"
            ]
        },
        {
            role: "Manager",
            desc: "Manage projects and keep work moving",
            tasks: [
                "Assign tasks",
                "Track progress",
                "Manage deadlines"
            ]
        },
        {
            role: "Employee",
            desc: "Focus on your work and complete tasks",
            tasks: [
                "View tools",
                "Update status",
                "Get notifications"
            ]
        },
    ]
    return (
        <div className='my-6'>
            <div className='text-3xl font-bold text-slate-900 text-center my-8'>Designed For Every Role</div>
            <div className='flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center md:justify-evenly '>
                {roles.map((role, index) => (
                    <motion.div key={role.role}
                        initial={{
                            opacity: 0,
                            x: index === 0 ? -100 : index === 2 ? 100 : 0,
                            y: index === 1 ? 50 : 0
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0
                        }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.2 ,
                            ease:"easeOut"
                        }}

                        className='flex flex-col gap-3 border border-slate-200 shadow-sm p-6 rounded-md'>
                        <h2 className='text-sm font-bold text-slate-900'>{role.role}</h2>
                        <p className='text-sm text-slate-700 '>{role.desc}</p>
                        <ul className='flex flex-col just gap-2 '>
                            {role.tasks.map((task) => (
                                <div className='flex items-center gap-2 '>
                                    <CircleCheckBig size={12} className='text-indigo-600' />   <li className='text-sm font-medium text-slate-700'>{task}</li>
                                </div>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Role
