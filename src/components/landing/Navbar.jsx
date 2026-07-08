import React from 'react'
import { Sparkles } from 'lucide-react'
const Navbar = () => {
      const menu = ["Features", "Pricing", "How it works", "About", "Contact"]

  return (
   <div className='flex justify-between items-center'>
    <div className="logo flex justify items-center gap-2">
                    <Sparkles className='text-indigo-600 text-3xl' fill='currentColor' />
                    <p className='text-3xl font-bold '>Dev<span className='text-indigo-600'>Track</span></p>
                </div>
                <div className="menu flex items-center gap-5 font-semibold ">
                    {menu.map((item,index) => (
                        <ul key={item[index]}>
                            <li className='text-lg cursor-pointer hover:text-indigo-500'><a href="#">{item}</a></li>

                        </ul>
                    ))}

                </div>
                <div className="buttons flex gap-3">
                    <button className='text-lg font-medium cursor-pointer '>Sign in</button>
                    <button className='bg-linear-to-r from-indigo-700  to-indigo-500 text-white font-medium rounded-md py-2 px-4 cursor-pointer'>Get Started Free</button>
                </div>
   </div>
  )
}

export default Navbar
