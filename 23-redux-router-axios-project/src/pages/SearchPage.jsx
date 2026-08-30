import React from 'react';
import SearchBar from '../components/SearchBar';
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";


const SearchPage = () => {
  return (
    <div>
        <SearchBar />
        <Tabs />
        <ResultGrid/>
    </div>
  );
}

export default SearchPage;