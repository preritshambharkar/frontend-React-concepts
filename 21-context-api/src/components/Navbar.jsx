import React from 'react';
import Navbar2 from "./Navabr2";

const Navbar = () => {
  return (
    <div style={{display:'flex', gap:30, background:'yellow', justifyContent:'space-between', padding: 20}}>
        <h3>Title</h3>
        <Navbar2 />
    </div>
  );
}

export default Navbar;