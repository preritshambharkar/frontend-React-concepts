import React from 'react';
import { ArrowRight } from 'lucide-react';
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 rounded-4xl overflow-hidden relative mr-5'>
        <img className='h-full w-full object-cover' src={props.user?.img} alt="" />
       <RightCardContent id={props.id} user={props.user} />
    </div>
  );
}

export default RightCard;