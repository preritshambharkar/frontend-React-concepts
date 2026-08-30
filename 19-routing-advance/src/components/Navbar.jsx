import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-amber-700'>
      <h2 className='text-xl font-bold'> Prerit </h2>
      <div className='flex gap-8'>
        <Link className='text-xl font-semibold' to='/'>Home</Link>
        <Link className='text-xl font-semibold' to='/product'>Product</Link>
        <Link className='text-xl font-semibold' to='/courses'>Courses</Link>
        <Link className='text-xl font-semibold' to='/about'>About</Link>
        {/* <a className='text-lg font-bold' href="/">Home</a>
        <a className='text-lg font-bold' href="/product">Product</a>
        <a className='text-lg font-bold' href="/about">About</a> */}
      </div>
    </div>
  );
}

export default Navbar;