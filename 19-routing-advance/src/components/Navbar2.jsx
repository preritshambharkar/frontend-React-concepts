import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div>
        <button 
         onClick={() => {
            navigate('/')
         }} 
         className='bg-fuchsia-900 rounded px-10 py-6 m-2'>Return to Home page</button>
        <button 
         onClick={() => {
            navigate(-1)
         }}
         className='bg-fuchsia-900 rounded px-10 py-6 m-2'>Back</button>
    </div>
  );
}

export default Navbar2;