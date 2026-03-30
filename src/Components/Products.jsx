import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise} ) => {
    const products = use(productsPromise)
    console.log(products);
    return (  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1 md:p-3 w-9/12 mx-auto items-center'>
          {products.map(product  => <ProductCard key={product.id} product={product}  ></ProductCard> )}
          
          </div>



        

       
       )
    
};

export default Products;