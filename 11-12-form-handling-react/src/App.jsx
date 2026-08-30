import React, { useState } from 'react';



const App = () => {
  const [email, setEmail] = useState('');

  const callYourOwnCustomeFormHandler = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    setEmail('');
  }

  const twoWayDataBinding = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  return (
    <form onSubmit={
      (e) => {callYourOwnCustomeFormHandler(e)}}>
      <input type="text" placeholder="Enter your name" />
      <br />
      <input type="text" placeholder="Two way data binding" 
       onChange={(e) => {twoWayDataBinding(e)}}
       value={email}/>
      <br />
      <button type="submit">Submit</button>

    </form>
  );
}

export default App;