import { Camera, X } from 'lucide-react'
import React from 'react'
import man1 from "../../assets/man-1.jfif"
import { useForm } from "react-hook-form"
const EditProfile = ({user,setEditProfileModal}) => {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))
  return (
    <div className='fixed inset-0 z-50 bg-black/50 backdrop:blur-sm flex items-center justify-center p-4 h-auto'>
      <div className='bg-white w-[95%] sm:w-[90%] md:w-[650px] h-70vh  rounded-lg p-4 sm:p-6 '>
  <div className='flex justify-between items-center'>
           <p className='text-lg font-medium'>Edit Profile</p>
           <X  size={16} className='text-slate-500' onClick={()=>setEditProfileModal(false)}/>
  </div>
 <form onSubmit={handleSubmit(onSubmit)}>
            <div className='my-4  flex items-center justify-center flex-col'>
                <div className='relative'>
     <img src={man1} className='h-30 w-30 object-cover object-top rounded-full' alt="" />
     <div  className='absolute right-2 bottom-1.5 text-white p-2 rounded-full bg-indigo-600 border-2 border-white'>
         <Camera size={14}/>
     </div>
     </div>
     <p className='text-sm font-medium text-nowrap my-2'>Click the icon to change photo</p>
  </div>
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
      </div>
    </div>
  )
}

export default EditProfile
