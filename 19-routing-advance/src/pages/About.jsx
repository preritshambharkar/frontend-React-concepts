import React from 'react';
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const About = () => {
    let navigate = useNavigate();
    return (
    <div>
        
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-lg font-semibold' to='/about/about1'>About1</Link>
            <Link className='text-xl font-semibold' to='/about/about2'>About2</Link>
        </div>
        <Outlet/>
    </div>
  );
}

export default About;