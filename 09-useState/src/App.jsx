import React, {useState} from 'react';

const App = () => {

  const [num, setNum] = useState(0);

  const decrease = () => {
    setNum(num - 1);
  }


  const incrementByFive = () => {
    setNum(num + 5);
  }

  const [first, setFirst] = useState({name: 'Prerit', age: 27});

  //destructuring of object
  const changeUserName = () => {
    const newUser = {...first};
    newUser.name = 'Prerit Shambharkar';
    setFirst(newUser);
  }


  const [arr, setArr] = useState([10, 12, 15, 23]);

  const changeArrayValueOnClick = () => {
    const newArr = [...arr];
    newArr.push(40);
    setArr(newArr);
  }
  
  const [sampleNums, setSampleNums] = useState(12);
  
  function batchUpdate(event) {
    setSampleNums(prev => prev + 1);
    setSampleNums(prev => prev + 1);
    setSampleNums(prev => prev + 1);
    setSampleNums(prev => prev + 1);
  }



  return (
    <>
    <div>This is the value of {num}</div>
    <button className='btn' onClick={() => setNum(num + 1)}>Increment</button>
    <button className='btn' onClick={decrease}>Decrement</button>
    <button className='btn' onClick={incrementByFive}>Increment by 5</button>
    <button className='btn' onClick={() => setNum(0)}>Reset</button>
    <h1>{first.name},{first.age}</h1>
    <button onClick={changeUserName}>Change User Name</button><br/>
    <h1>Change this array on click {arr}</h1>
    <button onClick={changeArrayValueOnClick}>Change Array Value</button>
    <h1>Here is the example of batch update {sampleNums}</h1>
    <button onClick={(e) => {
      batchUpdate(e)
    }}>Batch update on click</button>
    </>
  );
}

export default App;