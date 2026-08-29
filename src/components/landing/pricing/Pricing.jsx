import React from 'react'
import Free from './Free'
import Premium from './Premium'
import FAQ from './FAQ'

const Pricing = () => {
  return (
    <div id='#pricing' className='bg-linear-to-r from-purple-200/50 to-indigo-200/50  grid grid-cols-1 lg:grid-cols-[0.7fr_2fr_2fr_2fr] rounded-md gap-5 p-6' >
            <div className='flex flex-col items-start justify-center'>
                    <h2 className='text-lg font-bold text-slate-900 '>Simple pricing for every team</h2>
                    <p className='text-sm text-slate-500 font-medium text-nowrap'>Choose the plan that fits your needs</p>
            </div>
            <div>
                <Free/>
            </div>
            <div>
                <Premium/>
            </div>
            <div>
                <FAQ/>
            </div>

    </div>
  )
}

export default Pricing
