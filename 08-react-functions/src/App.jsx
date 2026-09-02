import React from 'react';

const App = () => {

  const onClickFunction = () => {
    console.log('button hovered');
  }

  const onMouserUpFunction = (elem) => {
    console.log('button mouse up', elem); 
  }

  const onMouseEnterOnDiv = (elem) => {
    console.log('mouse entered on div', elem);
  }

  return (
    <>
      <div>
        <button onClick={function() {
          console.log('button Clicked');
        }}>Click Me! function within</button>

        <br/><br/>
        
        <button onMouseEnter={() => {
          onClickFunction();
        }}>Click Me! anonymus function calling another function</button>

        <br/><br/>

        <button onMouseDown={(elem) => {console.log('button Clicked', elem)
        }}>Click Me! anonymus function with event parameter</button>

        <br/><br/>

        <button onMouseUp={function(elem) {
          onMouserUpFunction(elem);
        }}>Click Me! on Mouser Up Function </button>
      </div>

      <br/><br/>

      <div style={{height: 300, width: 400, backgroundColor: 'lightpink'}} 
        onMouseMove={(elem) => {onMouseEnterOnDiv(elem);}}
      >sample text</div>
    </>
  );
}

export default App;
