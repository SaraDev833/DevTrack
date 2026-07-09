import React from 'react'
import Navbar from '../components/landing/Navbar'
import Banner from '../components/landing/banner/Banner'
import LandingFooter from '../components/landing/LandingFooter'
import LandingFooter2 from '../components/landing/LandingFooter2'
const Landing = () => {
  
    return (
        <div className='w-full bg-white '>
            <div className="max-w-7xl mx-auto w-full py-6 px-6 lg:px-6 xl:px-0 ">
               <Navbar/>
               <Banner/>
            </div>
               <LandingFooter/>
               <LandingFooter2/>
        </div>
    )
}

export default Landing
