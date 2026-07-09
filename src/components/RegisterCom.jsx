import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterCom = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))


  return (
    <div className='py-6'>
      <div>
         <span>Already have an account?<span>Sign in</span> </span>
       <h2 className='lg:text-3xl md:text-2xl text-xl font-bold'>Create your Account</h2>
       <p className='text-slate-500 text-xs sm:text-sm'>Set up your workplace and get started in minutes</p>
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
      </div>

    </div>
  )
}

export default RegisterCom
