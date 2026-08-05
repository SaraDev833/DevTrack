import React from 'react'

import NotificationModal from './NotificationModal'
const NotifiTable = ({isModalOpen , setIsModalOpen , setSelectedNotification , data , setData}) => {
   
  return (
    <div className='border border-slate-300 shadow-sm rounded-md flex flex-col '>

          {data.map((notification)=>(
                
            <div key={notification.id} className={`${notification.isRead === false?"bg-slate-200": "bg-white"} flex justify-between gap-2 p-6 border-b border-b-slate-300 cursor-pointer`} onClick={()=>{
              setSelectedNotification(notification);
              setIsModalOpen(!isModalOpen)
              setData((prev)=>
              prev.map((item)=>
                item.id === notification.id?
              {
                ...item,
                isRead:true
              }: item
              )
            )
            }
            }>
              <div className='flex gap-2 items-center justify-center'>
                {notification.isRead === false && (<span className=' h-2 w-2 rounded-full bg-indigo-600  '></span>)}
           
   <div className='flex flex-col gap-1'>
                    <h3 className='text-sm font-semibold '>{notification.title}</h3>
                    <p className='text-xs font-medium text-slate-500'>{notification.message.length >25 ? notification.message.slice(0,25)+"...":notification.message}</p>
                </div>
              </div>
               
                <div>
                    <p className='text-sm'>{notification.time}</p>
                </div>
                </div>
              
          ))}
    </div>
  )
}

export default NotifiTable
