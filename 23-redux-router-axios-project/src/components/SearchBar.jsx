import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { setQuery, setActiveTabs, setResults, setLoading, setError, clearResults } from '../redux/features/searchSlice';

const SearchBar = () => {
  const [searchBoxText, setSearchBoxText] = useState('');
  
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchBoxText))
    setSearchBoxText('');
  }

  return (
    <div className=''>
      <form className='flex bg-gray-900 gap-10 p-10'
        onSubmit={(e) => {onSubmitHandler(e);}}>
        <input className='w-full border-white border-2 px-4 py-2 rounded-xl text-white outline-none'
          type="text"
          value={searchBoxText}
          placeholder='Search Anything'
          onChange={(e) => {
            setSearchBoxText(e.target.value);
          }}
         />
         <button className='active:scale-90 cursor-pointer  border-2 px-4 py-2 rounded-xl'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar