import React from 'react'

import Left from './Left'
import Right from './Right'
const Banner = () => {
  
    return (
        <div className='md:mt-15 mb-10 flex justify-between lg:gap-4 flex-col lg:flex-row border-b border-b-slate-100 pb-6' >
       <Left/>
           <Right/>
        </div>
    )
}

export default Banner
