import { CreditCard, Globe, Megaphone, ShoppingCart, TabletSmartphone } from 'lucide-react'
import React from 'react'

const RecentProjects = () => {
    const lists = [
        {
            name: "Website Design",
            icon: <Globe />,
            status: "In progress",
            bgColor: "bg-indigo-200/50",
            color: "text-indigo-600",
            percentage: 60,
        },
        {
            name: "Mobile App",
            icon: <TabletSmartphone />,
            bgColor: "bg-blue-200/50",
            color: "text-blue-600",
            status: "In progress",
            percentage: 40,
        },
        {
            name: "Ecommerce API",
            icon: <ShoppingCart />,
            bgColor: "bg-green-200/50",
            color: "text-green-600",
            status: "In progress",
            percentage: 100,
        },
        {
            name: "Marketing Website",
            icon: <Megaphone />,
            bgColor: "bg-orange-200/50",
            color: "text-orange-600",
            status: "In progress",
            percentage: 30,
        },
        {
            name: "Payment Gateway",
            icon: <CreditCard />,
            bgColor: "bg-purple-200/50",
            color: "text-purple-600",
            status: "In progress",
            percentage: 20,
        },
    ]
    return (
        <div className='bg-white p-6 border-slate-200 shadow-sm rounded-2xl w-full '>
            <div className='flex justify-between items-center mb-6 last:mb-0'>
                <h1 className='text-lg font-bold text-slate-900 '>Recent projects</h1>
                <a href="#" className='text-sm font-medium text-indigo-600'>View all</a>
            </div>
            {lists.map(list => (
                <div key={list.name} className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-4'>
                        <div className={`${list.color} ${list.bgColor} py-2 px-3 rounded-md`}>
                            {list.icon}
                        </div>
                        <div className='flex flex-col gap-2 w-64'>
                            <span className='font-bold text-slate-900 '>{list.name}</span>
                            <div className="h-1.5 bg-slate-500/10 rounded-full w-full overflow-hidden">
                                <div className="h-full  bg-indigo-500 rounded-full" style={{ width: `${list.percentage}%` }}></div>
                            </div>
                        </div>
                        <span>{list.percentage}%</span>
                    </div>
                    <div>
                        <button className={`${list.color} ${list.bgColor} py-2 px-3 rounded-3xl text-sm`}>{list.status}</button>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default RecentProjects
