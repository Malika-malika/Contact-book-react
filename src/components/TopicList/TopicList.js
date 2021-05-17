import React, { useContext, useEffect } from 'react';
import { topicContext } from '../../TopicContext/TopicContext';
import TopicCard from '../TopicCard/TopicCard';
import "./TopicList.css"


const TopicList = () => {
   const{ getTopics, topicsData } = useContext(topicContext);

   useEffect(() => {
      getTopics()
   }, [])

   return (
      <div className="list">
         {topicsData.map((item) =>(
            <TopicCard key={item.id} item={item}/>
         ))}
      </div>
   );
};

export default TopicList;