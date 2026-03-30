import React from 'react';
import userImg from '../assets/user.png'
import pckgImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='w-full md:w-9/12 mx-auto py-20 space-y-4'>
            <div className='text-center space-y-2'>
            <h2 className='text-2xl md:text-3xl font-bold'>Get Started in 3 Steeps</h2>
            <p className='text-xs'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3'>

                     <div className='bg-gray-50 w-full md:w-85 rounded-md space-y-6 py-8 px-4 '>
                        <span className='flex flex-col items-end '><h2 className='bg-[#6C29F8] rounded-full w-6 h-6 text-center text-white  right-0'>01</h2></span>
                        <span className='flex flex-col items-center space-y-2 '>
                            <img className='bg-[#DEE1F9] rounded-full w-16 p-2' src={userImg} alt='User image'></img>
                            <h4 className='text-xl font-semibold'>Creat Account</h4>
                            <p className='text-center text-md'>Sign up for free in seconds. No credit card required to get started.</p>
                        </span>
                     </div>
                     <div className='bg-gray-50 w-full md:w-85 rounded-md space-y-6 py-8 px-4 '>
                        <span className='flex flex-col items-end '><h2 className='bg-[#6C29F8] rounded-full w-6 h-6 text-center text-white  right-0'>02</h2></span>
                        <span className='flex flex-col items-center space-y-2 '>
                            <img className='bg-[#DEE1F9] rounded-full w-16 p-2' src={pckgImg} alt='User image'></img>
                            <h4 className='text-xl font-semibold'>Choose Products</h4>
                            <p className='text-center text-md'>Browse our catalog and select the toolsthat fit your needs.</p>
                        </span>
                     </div>
                     <div className='bg-gray-50 w-full md:w-85 rounded-md space-y-6 py-8 px-4 '>
                        <span className='flex flex-col items-end '><h2 className='bg-[#6C29F8] rounded-full w-6 h-6 text-center text-white  right-0'>03</h2></span>
                        <span className='flex flex-col items-center space-y-2 '>
                            <img className='bg-[#DEE1F9] rounded-full w-16 p-2' src={rocketImg} alt='User image'></img>
                            <h4 className='text-xl font-semibold'>Start Creating</h4>
                            <p className='text-center text-md'>Download and start using your premium tools immediately.</p>
                        </span>
                     </div>

            </div>
        </div>
    ); 
};

export default GetStarted;