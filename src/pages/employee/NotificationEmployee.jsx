import React, { useContext , useState } from 'react'
import NotifiNavbar from '../../components/notification/NotifiNavbar'
import NotiffiTab from '../../components/employee/NotificationEmployee/NotiffiTab'
import NotifiTable from '../../components/notification/NotifiTable'
import notifications from '../../data/Notification'
import { AuthContext } from '../../Context/AuthContext'
import NotificationModal from '../../components/notification/NotificationModal'

const NotificationEmployee = () => {
    const [data, setData] = useState(notifications)
    const[selectedTab , setSelectedTab] = useState("All")
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [selectedNotification , setSelectedNotification] = useState(null);
    const {user} = useContext(AuthContext)

    const filterNotifications = data.filter((notification)=>(
      notification.userId === user.id
    ))
      const deleteAll = ()=>{
      setData([]);
    }
  return (
    <div>
      <NotifiNavbar data={filterNotifications} setData={setData} deleteAll={deleteAll}/>
        {isModalOpen && (<NotificationModal notification={selectedNotification} setIsModalOpen={setIsModalOpen}/>)}
    <div className='flex gap-4 '></div>
      <NotiffiTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <NotifiTable isModalOpen={isModalOpen} setIsModalOpen = {setIsModalOpen} setSelectedNotification={setSelectedNotification} filterNotifications={filterNotifications} setData={setData} selectedTab = {selectedTab}/>
    </div>
  )
}

export default NotificationEmployee
