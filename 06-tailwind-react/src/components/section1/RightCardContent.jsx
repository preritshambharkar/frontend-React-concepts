import React from 'react';
import { ArrowRight } from 'lucide-react';


const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 h-full w-full left-0 p-8 flex flex-col justify-between scroll-smooth'>
             <h2 className='rounded-full h-8 w-8 flex font-semibold items-center justify-center bg-white text-black'>{props.id + 1}</h2>
             <div>
                <p className='text-xl font-bold text-justify text-white'>{props.user?.intro}</p>
                <div className='flex justify-between gap-2 mt-4'>
                    <button className='bg-white text-black px-4 py-2 rounded-full mt-4 font-semibold'>
                        {props.user?.tag}
                    </button>
                    <button className='bg-white text-black px-4 py-2 rounded-full mt-4 font-semibold flex items-center gap-2'>
                        <ArrowRight />
                    </button>
                </div>
             </div>
        </div>
  );
}

export default RightCardContent;