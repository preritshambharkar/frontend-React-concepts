import React, { useEffect } from 'react';
import {fetchPhotos, fetchVideos, fetchGif} from "../api/mediaApi";
import { setActiveTabs, clearResults, setError, setLoading, setQuery, setResults} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import ResultCard from './ResultCard';

const ResultGrid = () => {


  const dispatch =  useDispatch();
  const {query, activeTab, results, error, loading} = useSelector((store) => store.search);
  
  useEffect(() => {
    const getDataFromApi = async() => {
      if(!query) return;
      dispatch(setLoading());
      try {
        let data = [];
        if(activeTab == 'photos') {
          let response = await fetchPhotos(query);          
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photos',
            thumbnail: item.urls.small,
            title: item.alt_description,
            src: item.urls.full,
            url: item.links.html
          }));
        }
        if(activeTab == 'videos') {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id:item.id,
            type:'videos',
            thumbnail: item.image,
            title:item.user.name || 'video',
            src:item.video_files[0].link,
            url: item.url

          }));
        }
        if(activeTab == 'gifs') {
          let response = await fetchGif(query);
          console.log(response);
          data = response.data.map((item) => ({
            id:item.id,
            type:'gifs',
            thumbnail:item.bitly_url,
            title: item.title,
            src: item.images.downsized.url,
            url: item.url
          }));
          console.log(data);
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error));
      }
    }
    getDataFromApi();
  },[query, activeTab]);

  if(error) return <h2>Error</h2>
  if(loading) return <h2>Loading...</h2>

  return (
    <div className='h-full justify-center flex flex-wrap gap-10 rounded-xl overflow-hidden px-5'>
      {results.map((elem, idx) => {
        return <div key={idx}>
          <ResultCard elem={elem} />
        </div>
      })}
    </div>
  );
}

export default ResultGrid;