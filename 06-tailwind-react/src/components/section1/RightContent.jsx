import RightCard from './RightCard';

const RightContent = (props) => {  
  return (
    <div className='h-full overflow-x-auto w-2/3 p-6 flex flex-nowrap'>
      { props.users.map(function(user, idx) {return <RightCard key={idx} id={idx} user={user}/>})}

    </div>
  );
}

export default RightContent;