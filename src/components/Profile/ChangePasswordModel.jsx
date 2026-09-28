import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

const ChangePasswordModel = ({setPassModel}) => {
    const{
        register,
        handleSubmit,
        watch,
        formState:{errors}
    } = useForm();
    const handlePasswordChange = async(data)=>{
         try {
            const token = localStorage.getItem("token");
            const response = await axios.put("http://localhost:3000/api/change-password",{
                currentPassword:data.currentPass,
                newPassword:data.newPass
            },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    
        setPassModel(false)
         } catch (error) {
            console.log(error)
         }
    }
  return (
      <div className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 h-auto'>
          <div className='bg-white w-[95%] sm:w-[90%] md:w-[650px] h-70vh  rounded-lg p-4 sm:p-6 '>
            <form action="" onSubmit={handleSubmit(handlePasswordChange)}>
             <div className='flex flex-col gap-1'>
                 <label htmlFor="password">Password</label>
                 <input type="password" placeholder='current password' 
                 {...register("currentPass",{
                    required:"Current password is required"
                 })}
                 className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium placeholder:text-slate-400'/>
                 {errors.currentPass &&(
                    <p className="text-red-500 text-xs"> {errors.currentPass.message} </p>)
                    }
             </div>
             <div className='flex flex-col gap-1 my-5'>
                 <label htmlFor="password">New Password</label>
                 <input type="password" placeholder='new password' 
                 {...register("newPass", {
                    required:"New password is required",
                    minLength:{
                        value:8,
                        message:"Password must be atleast 8 characters"
                    }
                 })}
                 className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium placeholder:text-slate-400'/>
                 {errors.newPass && (
                    <p className="text-red-500 text-xs"> {errors.newPass.message} </p>
                 )}
             </div>
             <div className='flex flex-col gap-1'>
                 <label htmlFor="password">Confirm Password</label>
                 <input type="password" placeholder='confirm password' 
                 {...register("confirmPass",{
                    required:"Please confirm your password",
                    validate:(value)=>
                        value === watch("newPass")||"Passwords do not match"
                 })}
                 className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium placeholder:text-slate-400'/>
                 {errors.confirmPass && (
                    <p className="text-red-500 text-xs"> {errors.confirmPass.message} </p>
                 )}
             </div>
             <div className='flex justify-end'>
                     <button className='py-2 px-3 bg-indigo-600 text-white mt-3 text-sm rounded-md hover:bg-indigo-500 cursor-pointer'>Update Password</button>
             </div>
            </form>
          </div>
    </div>
  )
}

export default ChangePasswordModel
