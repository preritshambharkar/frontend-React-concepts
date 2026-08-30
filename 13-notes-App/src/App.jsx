import React, {useState} from 'react';

const App = () => {
  
  const [title, setTitle] = useState('');

  const [noteContent, setNoteContent] = useState('');

  const [notes, setNotes] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    const newNotes = [...notes];
    newNotes.push({title, noteContent});
    setNotes(newNotes);
    setTitle('');
    setNoteContent('');
  }

  const deleteNote = (idx) => {
    const deleteNote = [...notes];
    deleteNote.splice(idx);
    setNotes(deleteNote);
  }

  return (
    <div className='bg-black text-white h-screen lg:flex'>
      <form className='flex gap-4 lg:w-1/2 p-10 flex-col items-start' onSubmit={(e) => {formHandler(e)}}>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input 
          className='px-5 w-full py-2 border-2 outline-none rounded text-white' 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your note title"
        />
        
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          className='px-5 py-2 h-32 font- flex items-start flex-row border-2 outline-none rounded w-full text-white'
          placeholder="Enter your notes"
        />

        <button 
          className='bg-white font-bold w-full outline-none text-black px-5 py-2 rounded'>
          Add Note
        </button>
      </form>
      <div className=' lg:border-l-2 lg:w-1/2  border-white p-10'>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          { notes.map(function(elem, idx){
             return <div key={idx} className='w-40 h-52 flex flex-col bg-cover justify-between items-start relative bg-white text-black p-4 rounded-2xl'>
              <div>
                <h3 className='leading-tight flex-wrap font-bold text-xl'>{elem.title}</h3>
                <p className='mt-3 leading-tight flex-wrap text-gray-500 font-semibold'>{elem.noteContent}</p>
              </div>
              <button onClick={() => {deleteNote(idx)}} className='rounded w-full bg-amber-700'>Delete</button>
             </div>;          
          }) }
          </div>
      </div>
    </div>
  );
}

export default App;