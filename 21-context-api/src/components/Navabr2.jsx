import React from 'react';
import { useContext } from 'react';
import { ThemeDataContext } from "../context/ThemeContext";

const Navabr2 = () => {
  const data = useContext(ThemeDataContext);
  console.log(data);
  return (
    <div style={{display:'flex', gap:30}}>
        <h3>Home</h3>
        <h3>Career</h3>
        <h3>Products</h3>
        <h3>About Us</h3>
        <h3>{data}</h3>
    </div>
  );
}

export default Navabr2;