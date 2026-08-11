import { Camera, X } from 'lucide-react'
import React, { useState } from 'react'
import man1 from "../../assets/man-1.jfif"
import { useForm } from "react-hook-form"
const EditProfile = ({user,setEditProfileModal}) => {
    const [previewImage, setPreviewImage] = useState(user.avatar);
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
const handleImageChange=(e)=>{
  
    const file = e.target.files[0];
  
    if(file){
        const imgUrl = URL.createObjectURL(file);
      
        setPreviewImage(imgUrl)
    }
}
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
     <img src={previewImage} className='h-30 w-30 object-cover object-top rounded-full' alt="" />
   <label
  htmlFor="profileImage"
  className="
  absolute right-2 bottom-1.5
  text-white p-2
  rounded-full
  bg-indigo-600
  border-2 border-white
  cursor-pointer
  "
>
  <Camera size={14}/>
</label>
<input
  type="file"
  accept="image/*"
  id="profileImage"
  className="hidden"
  onChange={handleImageChange}
/>
     </div>
     <p className='text-sm font-medium text-nowrap my-2'>Click the icon to change photo</p>
  </div>
  <div className='flex flex-col w-full gap-2'>
  <label htmlFor="name" className='font-medium text-lg'>Full Name</label>
      <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium' value={user.name}  {...register("name", {
        required: true
      })} />
         {errors.name && <span>This field is required</span>}
</div>
  <div className='flex flex-col w-full gap-2'>
  <label htmlFor="email" className='font-medium text-lg'>Email</label>
      <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium' value={user.email}  {...register("email", {
        required: true
      })} />
         {errors.name && <span>This field is required</span>}
</div>
  <div className='flex flex-col w-full gap-2'>
  <label htmlFor="name" className='font-medium text-lg'>Full Name</label>
      <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium' value={user.name}  {...register("name", {
        required: true
      })} />
         {errors.name && <span>This field is required</span>}
</div>
  <div className='flex flex-col w-full gap-2'>
  <label htmlFor="name" className='font-medium text-lg'>Full Name</label>
      <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium' value={user.name}  {...register("name", {
        required: true
      })} />
         {errors.name && <span>This field is required</span>}
</div>
      
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
