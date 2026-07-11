import React from 'react'
 import { Sparkles } from 'lucide-react'
const Logo = () => {
  return (
     <div className="logo flex justify items-center gap-2">
                <Sparkles className='text-indigo-600 text-xl' fill='currentColor' />
                <p className='lg:text-3xl font-bold text-2xl'>Plan<span className='text-indigo-600'>nix</span></p>
            </div>
  )
}

export default Logo
