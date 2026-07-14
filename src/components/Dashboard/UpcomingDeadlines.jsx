import React from 'react'

const UpcomingDeadlines = () => {
    const lists = [
        {
            month: "July",
            date: 12,
            task: "Design landing page",
            title: "website design",
            priority: "high",
            color: "text-red-600",
            bgColor: "bg-red-200/50"
        },
        {
            month: "July",
            date: 14,
            task: "User Authentication Module",
            title: "Mobile App",
            priority: "high",
            color: "text-red-600",
            bgColor: "bg-red-200/50"
        },
        {
            month: "July",
            date: 18,
            task: "Payment gateway integration",
            title: "Ecommerce API",
            priority: "Medium",
            color: "text-yellow-600",
            bgColor: "bg-yellow-200/20"
        },
        {
            month: "July",
            date: 22,
            task: "API documentation",
            title: "Payment gateway",
            priority: "Low",
            color: "text-green-600",
            bgColor: "bg-green-200/50"
        },
        {
            month: "July",
            date: 20,
            task: "Content management system",
            title: "Marketing website",
            priority: "low",
            color: "text-green-600",
            bgColor: "bg-green-200/50"
        }
    ]
    return (
        <div className='bg-white p-6 border-slate-200 shadow-sm rounded-2xl w-full '>
            <div className='flex justify-between items-center mb-6 last:mb-0'>
                <h1 className='text-lg font-bold text-slate-900 '>Upcoming Deadlines</h1>
                <a href="#" className='text-sm font-medium text-indigo-600'>View Calender</a>
            </div>
            {lists.map(list => (
                <div key={list.name} className='flex justify-between items-center '>
                    <div></div>
                    <div>
                        <span className={`${list.color} ${list.bgColor} py-1 px-1 rounded md font-medium`}>{list.priority}</span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default UpcomingDeadlines
