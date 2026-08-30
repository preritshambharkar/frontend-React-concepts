import { fetchPhotos, fetchVideos, fetchGif } from './api/mediaApi';
import SearchBar from './components/SearchBar';
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import CollectionPage from './pages/CollectionPage';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='h-[100vh] bg-gray-950 text-white'>
      <Navbar/>
      {/* <button className='bg-yellow-900 p-2 rounded-xs m-2' 
       onClick={ async() => {
        console.log('button have been clicked');
        const data = await fetchPhotos('cat');
        console.log(data.results);
      }}>Get Photos</button>

      <button  className='bg-yellow-900 p-2 rounded-xs m-2'
        onClick={async() => {
          const res = await fetchVideos('cat');
          console.log(res.videos);
        }} 
      >Get Video</button>

      <button  className='bg-yellow-900 p-2 rounded-xs m-2'
        onClick={async() => {
          const res = await fetchGif('cat');
          console.log(res.data);
        }} 
      >Get Gif</button> */}
      <Routes>
        <Route  path= "/"  element={<SearchPage/>}  />
        <Route  path= "/collections"  element={<CollectionPage/>}  />
      </Routes>
    </div>
  )
}

export default App