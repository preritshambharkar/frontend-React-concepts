import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (props) => {
  return (
    <div className='py-4 gap-6 h-[90vh] items-center px-18 flex flex-row justify-between'>
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  );
}

export default Page1Content;