import React from 'react';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

const users = [
  {img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwZGlzcGxheXxlbnwwfHwwfHx8MA%3D%3D", intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.1", tag:"Satisfied"}, 
  {img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D", intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.1", tag:"Satisfied"},
  {img: "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D", intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.2", tag:"Neutral"}, 
  {img: "https://images.unsplash.com/photo-1752170080622-18196de87763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D", intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.3", tag:"Unsatisfied"}
];


const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;