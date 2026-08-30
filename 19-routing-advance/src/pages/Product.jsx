import React from 'react';
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-lg font-semibold' to='/product/mens'>Mens</Link>
            <Link className='text-xl font-semibold' to='/product/womens'>Womens</Link>
        </div>
       <h1>Product</h1>
    </div>
  );
}

export default Product;