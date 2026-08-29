import React from 'react'
import Navbar from '../components/landing/Navbar'
import Banner from '../components/landing/banner/Banner'
import LandingFooter from '../components/landing/LandingFooter'
import LandingFooter2 from '../components/landing/LandingFooter2'
import PlanninxWork from '../components/landing/PlanninxWork'
import Role from '../components/landing/Role'
import Clarity from '../components/landing/Clarity'
import Pricing from '../components/landing/pricing/Pricing'
import Manage from '../components/landing/Manage'
import Footer from '../components/landing/Footer'
const Landing = () => {
  
    return (
        <div className='w-full bg-white '>
            <div className="max-w-7xl mx-auto w-full py-6 px-6 lg:px-6 xl:px-0 ">
               <Navbar/>
               <Banner/>
               <LandingFooter/>
            <PlanninxWork/>
            <Role/>
            <Clarity/>
            <Pricing/>
            <Manage/>
            </div>
               <LandingFooter2/>
               <Footer/>
        </div>
    )
}

export default Landing
