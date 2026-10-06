import React, { useEffect } from 'react'
import NotifiNavbar from '../components/notification/NotifiNavbar'
import { useState } from 'react'
import NotifiTable from '../components/notification/NotifiTable'
import notifications from '../data/Notification'
import NotificationModal from '../components/notification/NotificationModal'
import axios from 'axios'
import { toast } from 'react-toastify'


const Notification = () => {
  const [data, setData] = useState([])
  const [selectedTab, setSelectedTab] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null)

  const deleteAll =async () => {
    try {
   const token = localStorage.getItem("token");
   const response = await axios.delete("http://localhost:3000/api/deleteAll",{
    headers:{
      Authorization:`Bearer ${token}`
    }
   })
   toast.success(response.data?.message)
   setData([])
      
    } catch (error) {
     toast.error(error.response?.data?.message)
    }

  }
  const tabs = [
    "All",
    "Unread",
    "Read"
  ]
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/get/notifications", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setData(response.data.recipient)
      } catch (error) {
        console.log(error.response?.data?.message)
      }
    }
    getNotifications()
  }, [])
  return (
    <div className='w-full min-w-0 space-y-6 bg-slate-100'>
      <NotifiNavbar deleteAll={deleteAll} data={data} setData={setData} />
      {isModalOpen && (<NotificationModal notification={selectedNotification} setIsModalOpen={setIsModalOpen} />)}
      <div className='flex gap-4 '>
        {tabs.map((tab) => (
          <button onClick={() => setSelectedTab(tab)} key={tab} className={`${selectedTab === tab ? "bg-indigo-600 text-white " : "border border-indigo-600 text-indigo-600"} py-1 px-2 rounded-full text-sm`}>
            {tab}
          </button>
        ))}
      </div>

      <NotifiTable isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setSelectedNotification={setSelectedNotification} data={data} setData={setData} selectedTab={selectedTab} />
    </div>
  )
}

export default Notification
