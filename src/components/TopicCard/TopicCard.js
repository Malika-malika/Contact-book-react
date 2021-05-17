import React from 'react';
import { Link } from 'react-router-dom';
import "./TopicCard.css"

const TopicCard = (props) => {
   //src source 

   return (
      <Link to={`/details/${props.item.id}`}>
         <div className="card">
            <p>{props.item.title}</p>
         </div>
      </Link>
      
   );
};

export default TopicCard;