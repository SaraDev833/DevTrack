import React from 'react'
import notifications from '../../data/Notification'
const NotifiTable = () => {
  return (
    <div className='border border-slate-200 rounded-md flex flex-col '>
          {notifications.map((notification)=>(
            <div key={notification.id} className=' flex'>
                <div className='flex flex-col gap-1'>
                    <h3>{notification.title}</h3>
                    <p>{notification.message}</p>
                </div>
                <div>
                    <p>{notification.time}</p>
                </div>
                </div>
          ))}
    </div>
  )
}

export default NotifiTable
