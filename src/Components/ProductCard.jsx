import React from 'react';

const ProductCard = ( {product}) => {
    return (
        <div className="card w-full md:w-85 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning flex flex-col justify-end">Most Popular</span>
    {/* <img src={product.icon} ></img> */}
    <div className='space-y-1'>
      <h2 className="text-3xl font-bold ">Starter</h2>
      <p>Perfect for getting started </p>
      <span className="text-xl">$0/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
     
   
    </ul>
    <div className="mt-6">
      <button className="btn bg-[#8F18FA] rounded-full btn-block text-white">Buy Now </button>
    </div>
  </div>
          </div>
    );
};

export default ProductCard;