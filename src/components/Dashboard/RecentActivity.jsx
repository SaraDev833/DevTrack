import React from 'react'
import Man1 from "../../assets/man-1.jfif"
import Man2 from "../../assets/man-2.jfif"
import Man3 from "../../assets/man-3.jfif"
import Man4 from "../../assets/man-4.jfif"

const RecentActivity = () => {
    const lists = [
        {
            name: "Rafi Ahmed",
            status: "Completed the tasks",
            comment: "Login API integration in website redesign",
            image: Man1,
            time: "2hr ago"
        },
        {
            name: "Maham Tanvir",
            status: "Updated The task",
            comment: "User management in mobile app",
            image: Man2,
            time: "1d ago"
        },
        {
            name: "Hasan Mahmud",
            status: "Commented on",
            comment: "Bug in task filter",
            image: Man3,
            time: "4hr ago"
        },
        {
            name: "Nusrat Jahan",
            status: "Updated a file to",
            comment: "Design landing page",
            image: Man4,
            time: "6hr ago"
        },
        {
            name: "Rafi Ahmed",
            status: "Completed the tasks",
            comment: "Login API integration in website redesign",
            image: Man2,
            time: "1d ago"
        }
    ]
    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className='flex justify-between items-center mb-6 last:mb-0'>
                <h1 className='font-bold text-lg text-slate-900'>Recent Activity</h1>
                <a href="#" className='text-indigo-600 text-sm font-medium'>View all</a>
            </div>
            {lists.map(list => (
                <div className='flex justify-between items-center gap-4 mb-6'>
                    <div>
                        <img src={list.image} alt="" className='w-10 h-10 rounded-full object-cover object-top' />
                    </div>
                    <div className='flex flex-col gap w-70 '>
                        <div><span className='text-xs font-bold text-slate-900'>{list.name}</span> <span className='text-slate-800  text-xs '>{list.status}</span></div>
                        <p className='text-xs text-slate-500'>{list.comment}</p>
                    </div>
                    <div>
                        <span className='text-sm text-slate-500 text-nowrap '>{list.time}</span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default RecentActivity
