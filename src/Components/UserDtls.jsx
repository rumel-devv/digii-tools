import React from 'react';

const UserDtls = () => {
    return (
        <div className='bg-[#801EF8] p-4  '>
           <div className=' grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto text-center'>
             <div className=' text-white p-3  md:border-r '>
                <p className='text-4xl font-bold'>50K+</p>
                <p className='text-md'>Active User</p>
            </div>
             <div className=' text-white p-3  md:border-r '>
                <p className='text-4xl font-bold'>200+</p>
                <p className='text-md'>Premium Tools</p>
            </div>
             <div className=' text-white p-3 '>
                <p className='text-4xl font-bold'>4.7</p>
                <p className='text-md'>Ratting</p>
            </div>
          
           
           </div>
        </div>
    );
};

export default UserDtls;