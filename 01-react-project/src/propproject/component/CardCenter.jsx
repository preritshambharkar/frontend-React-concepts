import React from 'react'

export const CardCenter = (props) => {
  return (
    <div className="center">
        <h3>{props.companyName} <span>{props.datePosted}</span></h3> 
        <h2>{props.post}</h2>
        <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
            <h4>{props.location}</h4>
        </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> 
    </div>
  )
}

export default CardCenter;