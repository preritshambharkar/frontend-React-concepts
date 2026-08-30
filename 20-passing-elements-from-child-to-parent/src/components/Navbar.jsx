import React from 'react';

const Navbar = (props) => {
    console.log('props passed from parent to child', props.theme);
  return (
    <div>
        Props received from parerent {props.theme}
        <button 
         onClick={() => {
            console.log('button is clicked and theme is changed');
            props.setTheme('dark');
         }}>Change theme to {props.theme}</button>
    </div>
  );
}

export default Navbar;