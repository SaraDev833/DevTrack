import React from 'react'
import RegisterImage from "../assets/RegisterImage.png"
import RegisterCom from '../components/RegisterCom'
import Google from '../components/Google'
const Register = () => {
   return (
      <div className="w-full bg-slate-200 min-h-screen lg:flex lg:items-center lg:justify-center">
         <div className=' px-5 flex items-stretch justify-center' >
             <div className="hidden lg:block lg:w-[65%]">
              <img
  src={RegisterImage}
  alt=""
  className="w-full h-full object-cover object-left rounded-lg"
/>
            </div>
            <div className="  bg-white  rounded-md  lg:w-[35%] shadow-xl w-1/2 backdrop:backdrop-blur-lg   ">
               <RegisterCom />
               <div className='px-10 py-5'>
                  <Google />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Register
