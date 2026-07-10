import React from 'react'
import { useForm } from 'react-hook-form'
import {User} from "lucide-react"
const RegisterCom = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
 const password = watch("password");
  console.log(watch("example"))


  return (
    <div className='p-6'>
      <div className='w-full'>
        <div className='flex justify-end mb-6'>
         <span className='text-xs'>Already have an account? <span className='text-xs text-indigo-600'>Sign in</span> </span>
         </div>
       <h2 className='lg:text-3xl md:text-2xl text-xl font-bold'>Create your Account</h2>
       <p className='text-slate-500 text-xs sm:text-sm mt-2'>Set up your workplace and get started in minutes</p>
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-6'>
        <div className='flex flex-col gap-2'>
        <span className='font-bold text-sm'>Full Name</span>
       <input className='border border-slate-500 rounded-md py-1 px-2 outline-none focus:ring-indigo-600 focus:ring' placeholder="Enter your full name"
        {...register("name", { required: true })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.type === "required" && (
        <p role="alert"> name is required</p>
      )}
      </div>
      {/* workspace */}
        <div className='flex flex-col gap-2'>
        <span  className='font-bold text-sm'>Workspace name</span>
       <input className='border border-slate-500 rounded-md py-1 px-2 outline-none focus:ring-indigo-600 focus:ring'  placeholder="Enter your workspace name"
        {...register("workspace", { required: true })}
        aria-invalid={errors.workspace ? "true" : "false"}
      />
      {errors.workspace?.type === "required" && (
        <p role="alert"> workspace name is required</p>
      )}
      </div>
    {/* email */}

      <div className='flex flex-col gap-2'>
        <span  className='font-bold text-sm'>Your email address</span>
      <input
      placeholder='Enter your email address'
      className='border border-slate-500 rounded-md py-1 px-2 outline-none focus:ring-indigo-600 focus:ring' 
        {...register("email", { required: "Email Address is required" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
     
      {errors.email && <p role="alert">{errors.email.message}</p>}
      </div>
  {/* password */}
   <div className='flex flex-col gap-2'>
  <span  className='font-bold text-sm'>Password</span>
  <input type="password" placeholder='Password' className='border border-slate-500 rounded-md py-1 px-2 outline-none focus:ring-indigo-600 focus:ring'  {...register("password" , {
    required:"Password is required",
    minLength:{
      value:8,
      message:"password must be atleast 8 characters"
    }
  })} />
  {errors.password &&(
    <p role='alert' >{errors.password.message}</p>
  )}
  </div>
  {/* confirm password */}
    <div className='flex flex-col gap-2'>
 
  <span  className='font-bold text-sm'>Confirm Password</span>
  <input type="password" placeholder='Confirm Password' className='border border-slate-500 rounded-md py-1 px-2 outline-none focus:ring-indigo-600 focus:ring'  {...register("confirmPassword" , {
    required:"Confirm Password is required",
    validate:(value)=>
      value === password || "Passwords do not match",
  })} />
  {errors.password &&(
    <p role='alert' >{errors.confirmPassword.message}</p>
  )}
  </div>
  <div className='flex gap-2 items-center '>
    <input type="checkbox" />
       <p className="text-sm font-medium">I agree to the <span className='text-sm text-indigo-600'>Terms of Services and Privacy Policy</span></p>
  </div>
      <input type="submit" className='text-white bg-indigo-700 py-1 rounded-md hover:bg-indigo-500 cursor-pointer'/>
   
    </form>
      </div>

    </div>
  )
}

export default RegisterCom
