import React from 'react'
import NotifiNavbar from '../components/notification/NotifiNavbar'
import { useState } from 'react'
import NotifiTable from '../components/notification/NotifiTable'
import notifications from '../data/Notification'
import NotificationModal from '../components/notification/NotificationModal'


const Notification = () => {
  const [data, setData] = useState(notifications)
    const[selectedTab , setSelectedTab] = useState("All")
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [selectedNotification , setSelectedNotification] = useState(null)
   
    const tabs =[
        "All",
        "Unread",
        "Read"
    ]
  return (
    <div className='w-full min-w-0 space-y-6 bg-slate-100'>
              <NotifiNavbar/>
  {isModalOpen && (<NotificationModal notification={selectedNotification} setIsModalOpen={setIsModalOpen}/>)}
    <div className='flex gap-4 '>
               {tabs.map((tab)=>(
                <button onClick={()=>setSelectedTab(tab)} key={tab} className={`${selectedTab === tab? "bg-indigo-600 text-white " : "border border-indigo-600 text-indigo-600"} py-1 px-2 rounded-full text-sm`}>
                          {tab}
                </button>
               ))}
    </div>
   
    <NotifiTable isModalOpen={isModalOpen} setIsModalOpen = {setIsModalOpen} setSelectedNotification={setSelectedNotification} data={data} setData={setData}/>
    </div>
  )
}

export default Notification
