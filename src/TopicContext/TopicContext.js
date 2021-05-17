import React, { useReducer } from 'react';
import axios from'axios';

export const topicContext = React.createContext();

const INIT_STATE = {
   topicsData: [],
   TopicDetails: null,
   searchData: [],
   thisId: null
}

const reducer = (state=INIT_STATE, action) =>{
   switch(action.type){
      case "GET_TOPICS":
         return {...state, topicsData: action.payload}
      case "GET_TOPIC_DETAILS": 
         return {...state, TopicDetails: action.payload} 
      case "SEARCH":
         return {...state, searchData: action.payload}
      case "THIS_ID":
         return {...state, thisId: action.payload}
      default: return state
   }
}
const TopicContextProvider = ({ children }) => {

   function postNewTopic(topic){
   axios.post('http://localhost:8001/topics', topic)
   }

   async function getTopics(){
   let {data} = await axios.get('http://localhost:8001/topics')
   dispatch({
      type: "GET_TOPICS",
      payload: data
   })
}
   async function getTopicDetails(id){
      let {data} = await axios.get(`http://localhost:8001/topics/${id}`)
      dispatch({
            type: "GET_TOPIC_DETAILS",
            payload: data
      })
   }

   async function saveTopic(id, newTopic){
      await axios.patch(`http://localhost:8001/topics/${id}`, newTopic)
      getTopicDetails(id)
   }

   async function search(value){
      let {data} = await axios.get(`http://localhost:8001/topics?q=${value}`)
      dispatch({
         type: "SEARCH",
         payload: data
      })
   }

   const [state, dispatch] = useReducer(reducer, INIT_STATE)

   const deleteTask = async (id) => {
      await axios.delete(`http://localhost:8001/topics/${id}`)
      getTopics()
   }

   const getId = (id) => {
      console.log('got id',id)
      dispatch({
         type: "THIS_ID",
         payload: id
      })
   }


   return (
      <topicContext.Provider value={{ 
         topicsData: state.topicsData,
         topicDetails: state.TopicDetails,
         searchData: state.searchData,
         thisId: state.thisId,
         getId,
         postNewTopic,
         deleteTask,
         getTopics,
         getTopicDetails,
         saveTopic,
         search
      }}>
         {children}
      </topicContext.Provider>
   )
}
export default TopicContextProvider;