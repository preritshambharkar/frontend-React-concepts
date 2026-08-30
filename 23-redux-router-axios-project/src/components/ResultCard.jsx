import { useDispatch } from "react-redux";
import { addToCollection } from "../redux/features/collectionSlice";

const ResultCard = ({elem}) => {
 
  const dispatch = useDispatch();

  const saveToCollections = (elem) => {
    console.log('your collection are safe with us');
    dispatch(addToCollection(elem));
  }
  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-4xl">
      <div className="h-full">
        {elem.type == 'photos' ? <img className="h-full w-full object-cover object-center rounded-4xl" src={elem.src} alt="" /> : ""}
        {elem.type === 'videos' ? <video className="h-full w-full object-cover object-center" autoPlay muted loop src={elem.src} alt="" /> : ""}
        {elem.type === 'gifs' ? <img className="h-full w-full object-cover object-center" src={elem.src} alt="" /> : ""}
      </div>
      <div className=" w-full p-3 absolute bottom-0 text-white flex flex-wrap justify-between gap-3 items-center">
        <h2 className="truncate text-lg capitalize font-medium min-w-1/3 overflow-hidden">{elem.title}</h2>
        <button className="rounded bg-teal-600 cursor-pointer active:scale-90 px-2 py-0"
         onClick={() => {saveToCollections(elem)}}>Save</button>
      </div>
    </div>
  );
}

export default ResultCard;