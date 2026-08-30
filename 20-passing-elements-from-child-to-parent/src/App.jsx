import React, { useState } from 'react';
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div>this is theme in UI in parent {theme}
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;