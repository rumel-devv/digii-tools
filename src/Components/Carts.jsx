import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const Carts = ({carts,setCarts}) => {
    
    const handleCarts = () => {
        setCarts([])
    }
    
    const handleDelete = (item) => {
        const filterdProduct = carts.filter(cart => cart.id !== item.id)
        setCarts(filterdProduct)
         toast.warning('Product deleted from cart',{autoClose: 3000})
    }

    const totalPrice = carts.reduce((sum,item) => sum + item.price,0)
    return (
        carts.length === 0 ? <div className='w-full md:w-9/12 mx-auto p-10  flex md:flex-col items-center ' >  <GiShoppingCart className='text-4xl'></GiShoppingCart> <p className='text-3xl font-bold'>Cart is empty</p> </div> : <> <div className='w-full md:w-8/12 mx-auto py-20 space-y-6'>
             {carts.map(cart  => <div key={cart.id} className='border border-gray-300 p-4 rounded-lg bg-gray-100 flex  items-center space-x-2 md:space-x-7'>
                <img className='w-10 h-10' src={cart.image} alt='image'></img>
            
                 <div className='w-180'>
                    <h2 className='text-xl md:text-2xl font-semibold'>{cart.name}</h2>
                    <p className='md:block'>${cart.price} </p>
                </div>
                <span> <RiDeleteBin6Fill onClick={() => handleDelete(cart)} className='text-2xl text-red-500' ></RiDeleteBin6Fill></span>
              
            </div>)}
            
            <div className='text-black p-5 flex justify-between items-center '>
                <h2 className='text-2xl font-semibold'>Total</h2>
                <p  className='text-2xl font-semibold'> {totalPrice}$</p>
             </div>
             <button onClick={handleCarts} className='bg-[#6C29F8] btn rounded-full w-full text-white'>Procced To Checkout</button>
            </div>
             </>
    );
};

export default Carts;