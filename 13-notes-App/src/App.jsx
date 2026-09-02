import React, {useState} from 'react';

const App = () => {

  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    console.log(heading, content);
    console.log('form submitted');

    const newNotes = [...notes];
    newNotes.push({heading, content});
    setNotes(newNotes);
    
    console.log(newNotes);
    setHeading('');
    setContent('');
  }
  
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex flex-col w-1/2 gap-4 p-2 m-24 text-2xl font-medium items-start justify-between'>
        <h1 className='text-4xl font-bold'>Add your Notes</h1>
        <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-10 py-4 w-full rounded border-2 justify-between'
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea 
          type="text" 
          placeholder='Enter Notes Content'
          className='px-10 py-8 w-full h-32 rounded border-2'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button 
          onClick={(e) => {formHandler(e)}}
          className='px-10 py-4 w-full bg-white text-black rounded'
        >Add Notes</button>
      </form> 
      <div className='px-22 m-24 gap-4 lg:w-1/2 justify-start lg:border-l-2 items-start'>
        <h1 className='flex flex-nowrap text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-4 h-full mt-4 overflow-auto'>
          {notes.map((elem, idx) => {
            return <div key={idx} className=' flex justify-between flex-col h-50 w-40 bg-white text-black px-2 pb-3 rounded-2xl'>
                <div className=' flex font-medium text-2xl leading-tight '>{elem.heading}</div>
                <p>{elem.content}</p>
                <button onClick={deleteNote} className='bg-amber-600 rounded-4xl p-1 w-full self-center'>Delete</button>
              </div>
          
          })}
        </div>       
      </div>
    </div>
  );
}

export default App;
