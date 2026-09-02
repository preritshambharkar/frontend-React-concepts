import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  function mouseEnter() {
    console.log('mouse entered into the button');
    setNum(num+1);
  }

  function mouseOut() {
    console.log('mouse out from the button');
    setNum2(num + 1);
  }

  useEffect(() => {
    console.log('state of any of the variable is changed.');
    });

  useEffect(function(){
    console.log('num1 have beeen changed');
  },[num]);


  useEffect(() => {
    console.log('you have changed the value of num2');
    hoveredOnDiv()
  },[num2]);

  function hoveredOnDiv() {
    console.log('you have clicked or changed the value of num2');
  }

  return (
    <div>
      <button onMouseEnter={mouseEnter} onMouseOut={mouseOut}> CLick Me!</button>
      <div onClick={() => {setNum2(num2+1)}}> hover </div>
    </div>
  );
}

export default App;
