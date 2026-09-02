import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  return (
    <div className='parent'>
      <Card user="Prerit" age={27} />      
    </div>
  )
}

export default App
