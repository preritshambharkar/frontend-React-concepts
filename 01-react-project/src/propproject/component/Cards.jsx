import React from 'react';
import { Bookmark } from "lucide-react";
import CardCenter from './CardCenter';

const Cards = (props) => {
  return (
    <div className="cardProject">
        <div className="top">
            <img src={props.job.img} alt="" />
            <button><Bookmark size={12}/></button>
        </div>
        <CardCenter companyName={props.job.companyName} datePosted={props.job.datePosted} post={props.job.post} tag1={props.job.tag1} tag2={props.job.tag2} location={props.job.location} />
        <div className="bottom">
            <div>
                <h3>{props.job.pay}</h3>
                <p>{props.job.location}</p>
            </div>
            <button>Apply</button>
        </div>
    </div>
  )
}

export default Cards;