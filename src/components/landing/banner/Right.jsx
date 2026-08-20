import React from 'react'
import dashboard from "../../../assets/dashboard.png"
import {motion} from "framer-motion"
const Right = () => {
  return (
    <motion.div 
    initial={{
      x:80,
      opacity:0
    }}
    animate={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:0.7,
      delay:0.2,
      ease:"easeOut"
    }}
    className='lg:w-[60%] w-full mt-15 md:order-1 hidden md:block lg:order-2'>
        <div className='w-full  '>
             <img src={dashboard} alt="" className='w-full rounded-lg h-full object-cover object-top'/>
        </div>
           
    </motion.div>
  )
}

export default Right
