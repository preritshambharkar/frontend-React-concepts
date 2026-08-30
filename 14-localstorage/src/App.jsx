import React from 'react';

const App = () => {
  localStorage.clear();
  localStorage.setItem('username', 'Prerit');
  localStorage.setItem('age', '26');
  const usernane = localStorage.getItem('username');
  const age = localStorage.getItem('age');
  localStorage.removeItem('age');

  let userDetails = {
    username:'Prerit',
    age:26,
    city:'Raipur'
  };

  localStorage.setItem('userDetails', JSON.stringify(userDetails));
  const jsonDetails = localStorage.getItem('userDetails');  
  console.log(JSON.parse(jsonDetails));

  return (
    <div>App</div>
  );
}

export default App;