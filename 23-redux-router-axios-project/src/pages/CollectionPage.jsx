import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from '../redux/features/collectionSlice';

const CollectionPage = () => {
 
  const dispatch = useDispatch();
  const clearFromCollection = () => {
    dispatch(clearCollection());
  };
  const collections = useSelector((state) => state.collection.item);  
  return (
    <div className='overflow-auto px-10 py-10'>
      {collections.length > 0 ? 
       <div className='flex justify-between'>
        <h2 className='text-2xl font-medium'>Your Collection</h2>
        <button className='rounded-xl bg-red-700 px-10 py-2'
          onClick={() => {clearFromCollection()}}>
          Clear Collection
        </button>
      </div> : <h2 className='text-2xl font-medium'>Collection is empty</h2>}
      
      <div className="h-full w-full relative rounded-xl m-6 gap-10 flex flex-wrap justify-center items-center-safe overflow-hidden">
        {collections.map((item, idx) => {
          return <div key={idx}>
            <CollectionCard item={item}/>
          </div>
        })}
      </div>
    </div>
  );
}

export default CollectionPage;