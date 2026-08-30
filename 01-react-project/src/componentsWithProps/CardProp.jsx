import React from 'react';

const CardProp = (props) => {
  return (
    <div className="cardProps">
        <img src={props.img} alt="" />
        <h1>{props.username}, {props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias autem doloribus adipisci, natus perspiciatis nulla</p>
        <button>Show profile</button>
    </div>
  );
}

export default CardProp;