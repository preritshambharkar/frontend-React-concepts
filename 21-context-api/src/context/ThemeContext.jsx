import React from 'react';
import { createContext } from 'react';

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
  return (
    <div> this is sample context
        <ThemeDataContext.Provider value='Prerit'>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  );
}

export default ThemeContext;