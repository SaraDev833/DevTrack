import React, { useState } from 'react'

const NotiffiTab = ({selectedTab , setSelectedTab}) => {
     const tabs =[
        "All",
        "Unread",
        "Read"
    ]
  return (
      <div className='flex gap-4 p-4 my-4 border-y border-y-slate-200'>
               {tabs.map((tab)=>(
                <button onClick={()=>setSelectedTab(tab)} key={tab} className={`${selectedTab === tab? "bg-indigo-600 text-white " : "border border-indigo-600 text-indigo-600"} py-1 px-2 rounded-full text-sm`}>
                          {tab}
                </button>
               ))}
    </div>
  )
}

export default NotiffiTab
