import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-align-center justify-between items-center px-16 py-6'>
        <h1 className='bg-black text-white px-6 py-2 font-medium uppercase rounded-full'>Target Audience</h1>
        <button className='bg-gray-100 px-6 py-2 rounded-3xl tracking-wider uppercase font-medium'>Digital Banking Platform</button>
    </div>
  );
}

export default Navbar