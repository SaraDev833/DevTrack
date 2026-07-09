import React from 'react'
import RegisterImage from "../assets/RegisterImage.png"
import RegisterCom from '../components/RegisterCom'
const Register = () => {
  return (
    <div className='w-full bg-white h-screen'>
       <div className='p-5 h-full relative' >
                 <div className="left h-full w-[70%] ">
                    <img src={RegisterImage} alt="" className='w-full h-full rounded-lg' />
                 </div>
                    <div className="right absolute bg-slate-200  rounded-md right-5 top-5 w-1/2 shadow-xl backdrop:backdrop-blur-lg inset-y-5  ">
       <RegisterCom/>
              
                 </div>
       </div>
    </div>
  )
}

export default Register
