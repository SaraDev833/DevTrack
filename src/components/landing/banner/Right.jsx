import React from 'react'
import dashboard from "../../../assets/dashboard.png"
const Right = () => {
  return (
    <div className='lg:w-[60%] w-full md:order-1 hidden md:block lg:order-2'>
        <div className='w-full  '>
             <img src={dashboard} alt="" className='w-full rounded-lg h-full object-cover object-top'/>
        </div>
           
    </div>
  )
}

export default Right
