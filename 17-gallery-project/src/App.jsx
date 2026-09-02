import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  useEffect(()=> {
    getData();
  },[index]);

  const getData = async() => {
    console.log('Data loaded');
    const response = await Axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    console.log(response.data);
    setUserData(response.data);
  }

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h3>;
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <a key={idx} href={elem.url} target='_blank'>
          <div className='h-40 w-45 overflow-hidden bg-amber-50 rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h3>{elem.author}</h3>
      </a>; 
    });
  }

  return (
    <div className='bg-gray-950 overflow-auto text-white h-screen '>
      {/* <button className='active:scale-90 m-5 p-4 bg-amber-900 rounded-2xl'
        onClick={getData}>Get Data</button> 
        <h1 className='fixed text-fuchsia-600 text-5xl' >{index}</h1> 
      */}
      
      <div className='m-5 h-[90%] flex flex-wrap gap-5'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-10'>
        <button className='bg-amber-400 cursor-pointer active:scale-90 text-black rounded px-4'
          onClick={() => {
            if(index > 1){
              setIndex(index-1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button className='bg-amber-400 cursor-pointer active:scale-90 text-black rounded px-4'
          onClick={() => {
            setUserData([]);
            setIndex(index+1);  
          }}
        > Next</button>
      </div>
    </div>
  );
}

export default App;
