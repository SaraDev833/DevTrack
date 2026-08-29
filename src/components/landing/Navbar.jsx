import React, { useState } from 'react'
import { Sparkles, Menu } from 'lucide-react'
import Logo from '../Logo'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
const menu = [
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "How it works", link: "#how-it-works" },
  { name: "About", link: "#about" }
]

    return (
        <div className='flex justify-between items-center'>
        <Logo/>
            <div className="menu md:flex items-center gap-5 font-semibold hidden ">
                {menu.map((item) => (
                    <ul key={item.name}>
                        <li className='text-sm cursor-pointer hover:text-indigo-500 lg:text-lg'><a href={item.link}>{item.name}</a></li>

                    </ul>
                ))}

            </div>
            <div className='md:hidden '>
                <Menu className={`relative  cursor pointer z-30 ${isOpen ? "text-indigo-800" : "text-indigo-700 "}`} onClick={() => setIsOpen(!isOpen)} />
                {isOpen && (
                    <div className="absolute top-0 right-0 h-screen w-80 bg-indigo-50 shadow-xl transform z-20 transition-all duration-500 ease-out">
                        <div className="menu flex flex-col items-start gap-5 font-semibold pt-20 px-10">
                            {menu.map((item) => (
                                <ul key={item.name}>
                                    <li className='text-lg cursor-pointer hover:text-indigo-500'><a href={item.link}>{item.name}</a></li>

                                </ul>
                            ))}

                        </div>

                        <div className="buttons flex flex-col gap-3 pt-10 items-start px-10">
                            <button className='text-sm font-medium cursor-pointer hover:text-indigo-500'>Sign in</button>
                            <button className='bg-linear-to-r from-indigo-700  to-indigo-500 text-white font-medium rounded-md py-2 px-4 cursor-pointer'>Get Started Free</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="buttons md:flex gap-3 hidden">
                <button className='lg:text-sm text-xs font-medium cursor-pointer '>Sign in</button>
                <button className='bg-linear-to-r from-indigo-700  to-indigo-500 text-white font-medium rounded-md py-1 px-4 cursor-pointer text-xs lg:text-sm'>Get Started Free</button>
            </div>
        </div>
    )
}

export default Navbar
