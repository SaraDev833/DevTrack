import React from 'react'
import GoogleIcon from './GoogleIcon'

const Google = () => {
    return (
        <div className='border-t px-6  flex items-center flex-col justify-center border-slate-400 cursor-pointer'>
            <span className='mt-4 text-slate-500'>Or Continue with</span>
            <div className='mt-4'>
                <button className='flex items-center cursor-pointer justify-center gap-2 py-2 px-4 border border-slate-400 rounded-md'>
                    <GoogleIcon />
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default Google
