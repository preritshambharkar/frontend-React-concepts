import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/features/counterSlice';

const App = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.value);

  const [inputNumber, setInputNumber] = useState(0);

  return (
    <div>
      App counter
      <h1>{counter}</h1>
      
      <button 
        onClick={() => {
          dispatch(increment())
        }}>Increment</button>

      <button
        onClick={() => {
          dispatch(decrement())
        }}>
      Decrement</button>
      <br />
      <input type="number" 
        name = "sampleNumber"
        id = "sampleNumber" 
        value = {inputNumber}
        onChange = {(e)=>{
          setInputNumber(e.target.value)
        }}/>
      <button onClick={() =>{
        dispatch(incrementByAmount(Number(inputNumber)))
        }}>
          Increase by {inputNumber}
      </button>
    </div>
  );
}

export default App;