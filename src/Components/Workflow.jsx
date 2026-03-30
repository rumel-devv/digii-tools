import React from 'react';

const Workflow = () => {
    return (
      <div className='bg-linear-to-r from-[#8F18FA] to-[#9018facf] p-10 md:p-30'>
            <div className='text-center  text-white space-y-2'>
                <h2 className='text-3xl font-semibold'>Ready to Transform Your Workflow?</h2>
                <p className='text-xs'>Join thousands of professionals who are already using Digitools to work smarter<br></br>.Start your free trial today.</p>
            </div>
               <div className="flex flex-wrap gap-3 pt-3 justify-center ">
                        <button className=" px-4 py-2 rounded-full font-semibold text-md shadow-xl flex items-center gap-3  text-[#801EF8] bg-white"> Get Unlimited Access</button>
                        <button className="px-3 md:px-4 py-2 font-semibold text-md shadow-xl flex items-center gap-1 text-white border border-white rounded-full">Watch demo</button>
                      </div>
                       <p className='text-center text-white text-xs mt-2.5'> 14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;