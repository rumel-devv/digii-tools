import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise,carts,setCarts} ) => {
    const products = use(productsPromise)
  
    return (  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 md:p-3 w-9/12 mx-auto items-center'>
          {products.map(product  => <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts}  ></ProductCard> )}
          
          </div>



        

       
       )
    
};

export default Products;