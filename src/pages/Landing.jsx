import React from 'react'
import Navbar from '../components/landing/Navbar'
import Banner from '../components/landing/banner/Banner'
import LandingFooter from '../components/landing/LandingFooter'
const Landing = () => {
  
    return (
        <div className='w-full bg-white '>
            <div className="container mx-auto w-full py-6  ">
               <Navbar/>
               <Banner/>
               <LandingFooter/>
            </div>
        </div>
    )
}

export default Landing
