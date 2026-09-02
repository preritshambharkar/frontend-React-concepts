import Axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async() => {
    console.log("get data ");
    const samepleData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    console.log(await samepleData.json());

    const response = await Axios.get('https://picsum.photos/v2/list');
    console.log('response from axois ', response.data);

    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return <h3>{idx} Hello</h3>
        })}
      </div>
    </div>
  );
}

export default App;
