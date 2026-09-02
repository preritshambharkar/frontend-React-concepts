import React from 'react';
import Styles from './Header1.module.css';


const Header1 = () => {
  return (
    <div className={Styles.header1}>
        <h3>Header</h3>
        <button className={Styles.btn1}>This is Header button</button>
    </div>
  );
}

export default Header1;