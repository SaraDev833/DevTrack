import React from 'react'

import Left from './Left'
import Right from './Right'
const Banner = () => {
  
    return (
        <div className='md:mt-25 mb-15 flex justify-between lg:gap-4 flex-col lg:flex-row' >
       <Left/>
           <Right/>
        </div>
    )
}

export default Banner
