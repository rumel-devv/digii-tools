

const ProductCard = ( {product,carts,setCarts}) => {
 

  const handleBuyNow = () => {
        
         setCarts([...carts,product])
  }

    return (
        <div className="card w-full max-w-sm bg-base-100 shadow-sm">
  <div className="card-body">
    <div className='flex justify-end'><span className="badge badge-xs py-2 px-3 font-semibold text-white bg-[#8F18FA] "> {product.tagType} </span></div>
    <img className='w-8 h-8 border border-gray-300 rounded-full p-1' src={product.image} ></img>
    <div className='space-y-1'>
      <h2 className="text-xl font-semibold "> {product.name} </h2>
      <p> {product.description} </p>
      <span className="text-xl">${product.price}/{product.period}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {product.features.map((feature,ind)=>   <li key={ind}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span> {feature} </span>
      </li> )}
    </ul>
    <div className="mt-6">
     <button onClick={handleBuyNow} className="btn bg-[#8F18FA] rounded-full btn-block text-white">
      Buy Now
     </button>
    </div>
  </div>
          </div>
    );
};

export default ProductCard;