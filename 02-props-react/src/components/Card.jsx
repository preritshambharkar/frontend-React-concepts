import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
        <div className='card'>
            <img src="https://images.unsplash.com/photo-1784779040724-bc9c37961bd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mzh8fHxlbnwwfHx8fHw%3D" alt="" />
            <h3>{props.user}, {props.age}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae?</p>
            <button className="btn">View Profile</button>
      </div>
    </div>
  )
}

export default Card
