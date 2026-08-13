import { Camera, X } from 'lucide-react'
import React, { useState } from 'react'
import man1 from "../../assets/man-1.jfif"
import { useForm } from "react-hook-form"
const EditProfile = ({ user, setEditProfileModal , setUser }) => {
  const [previewImage, setPreviewImage] = useState(user.avatar);
  const [info , setInfo] = useState(user);
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setUser({
      ...info,
      avatar:previewImage
    });
    setEditProfileModal(false)
  }
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      const imgUrl = URL.createObjectURL(file);

      setPreviewImage(imgUrl)
    }
  }
  const handleChange=(e)=>{
      setInfo({
        ...info,
        [e.target.name]:e.target.value
      })
  }
  console.log(watch("example"))
  return (
    <div className='fixed inset-0 z-50 bg-black/50 backdrop:blur-sm flex items-center justify-center p-4 h-auto'>
      <div className='bg-white w-[95%] sm:w-[90%] md:w-[650px] h-70vh  rounded-lg p-4 sm:p-6 '>
        <div className='flex justify-between items-center'>
          <p className='text-lg font-medium'>Edit Profile</p>
          <X size={16} className='text-slate-500' onClick={() => setEditProfileModal(false)} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-4  flex items-center justify-center flex-col gap-6'>
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
                <Camera size={14} />
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
          <div className='flex flex-col w-full gap-1 my-3'>
            <label htmlFor="name" className='font-medium text-lg'>Full Name</label>
            <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium'   {...register("name", {
              required: true
            })}  onChange={handleChange} value={info.name}/>
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='flex flex-col w-full gap-1 my-3 my-2'>
            <label htmlFor="email" className='font-medium text-lg'>Email</label>
            <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium'  {...register("email", {
              required: true
            })} onChange={handleChange} value={info.email}/>
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='flex flex-col w-full gap-1 my-3'>
            <label htmlFor="phone" className='font-medium text-lg'>Phone Number</label>
            <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium'   {...register("phone", {
              required: true
            })} onChange={handleChange} value={info.phone}/>
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='flex flex-col w-full gap-1 my-3'>
            <label htmlFor="location" className='font-medium text-lg'>Location</label>
            <input type='text' className='rounded-md border outline-none border-indigo-600 focus:ring-2 focus:ring-2-indigo-600 p-2 text-sm font-medium'   {...register("location", {
              required: true
            })} onChange={handleChange} value={info.location}/>
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='flex justify-end mt-4'>
            <button type='submit' className='font-medium py-2 px-3 bg-indigo-600 text-white text-sm hover:bg-indigo-500 cursor-pointer rounded-md transition '>
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default EditProfile
