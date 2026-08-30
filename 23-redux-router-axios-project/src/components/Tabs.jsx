import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
 
  const tabs = ['photos','videos','gifs'];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className='flex flex-wrap justify-center-safe gap-3 m-10 '>
      {tabs.map((elem, idx)=>{
        return (
          <button 
           className={`${(activeTab==elem) ? "bg-blue-800" : "bg-orange-600"} transition p-3 m-2 rounded-xl uppercase cursor-pointer active:scale-90`}
           key={idx}
           onClick={() => {dispatch(setActiveTabs(elem));
           }}> {elem} </button>
        )
      })}
    </div>
  );
}

export default Tabs;