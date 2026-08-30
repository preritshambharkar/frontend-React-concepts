import React from 'react';
import { useDispatch } from "react-redux";
import { removeFromCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({item}) => {
  const dispatch = useDispatch();
  const removeElemFromCollection = () => {
    dispatch(removeFromCollection(item.id));
  };
  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl">
      <div className="h-full">
        {item.type == 'photos' ? <img className="h-full w-full object-cover object-center rounded-xl" src={item.src} alt="" /> : ""}
        {item.type === 'videos' ? <video className="h-full w-full object-cover object-center rounded-xl" autoPlay muted loop src={item.src} alt="" /> : ""}
        {item.type === 'gifs' ? <img className="h-full w-full object-cover object-center rounded-xl" src={item.src} alt="" /> : ""}
      </div>
      <div className=" w-full p-3 absolute bottom-0 text-white flex flex-wrap justify-between gap-3 items-center">
        <h2 className="truncate text-lg capitalize font-medium min-w-1/3 overflow-hidden">{item.title}</h2>
        <button className="rounded bg-teal-600 cursor-pointer active:scale-90 px-2 py-0"
         onClick={() => {removeElemFromCollection(item)}}>Remove</button>
      </div>
    </div>
  );
}

export default CollectionCard;