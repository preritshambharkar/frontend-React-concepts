import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' bg-blue-950 flex flex-wrap p-10 justify-between items-center'>
        <h1 className='text-4xl font-semibold'>MediaSearch</h1>
        <div className=' flex gap-5 text-xl items-center'>
            <Link className='bg-blue-400 px-6 py-2 active:scale-90 rounded' to='/'>Search</Link>
            <Link className='bg-blue-400 px-6 py-2 active:scale-90 rounded' to='/collections'>My Collection</Link>
        </div>
    </div>
  );
}

export default Navbar;