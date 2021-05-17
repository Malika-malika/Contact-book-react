import React, { useContext, useEffect, useState } from 'react';
import { topicContext } from '../../TopicContext/TopicContext';
import './TopicDetails.css';

const TopicDetails = (props) => {
   const {getTopicDetails, topicDetails, saveTopic, getId } = useContext(topicContext);
   const [editStatus, setEditStatus] = useState(false);
   const [editedTopic, setEditedTopic] = useState();
   const [del, setDel] = useState()

   const handleValue = (e)=> {
      let newTopic = {
         ...editedTopic,
         [e.target.name]: e.target.value
      }
      setEditedTopic(newTopic)
   }

   const handleSave = () => {
      saveTopic(props.match.params.id, editedTopic)
      setEditStatus(false)
      
   }

   useEffect(() => {
      getTopicDetails(props.match.params.id)
      setDel(props.match.params.id)
      getId(props.match.params.id)
 
   }, [props.match.params.id])
   console.log(del)

   return (
      <div>
         {topicDetails ? (
            <div>
               <div className="wraper">
                  <div className="main-left">
                     <div className="main-box">
                        {editStatus ? (
                        <div className="edit-textareas">
                           <textarea name="title" onChange ={handleValue}>{topicDetails.title}</textarea>
                           <textarea name="description" onChange ={handleValue} className="box-desc">{topicDetails.description}</textarea>
                           <textarea name="img" onChange ={handleValue}>{topicDetails.img}</textarea>
                           <textarea name="subTitle" onChange ={handleValue}>{topicDetails.subTitle}</textarea>
                           <textarea name="secondDescription" onChange ={handleValue} className="box-desc">{topicDetails.secondDescription}</textarea>
                        </div>

                        ) : (
                           <>
                           <p>{topicDetails.title}</p>
                           <p >{topicDetails.description}</p>
                           <img src={topicDetails.img} alt="topic-img"/> 
                           <p>{topicDetails.subTitle}</p>
                           <p >{topicDetails.secondDescription}</p>
                        </>

                        )}
                        <div className="details_btns">
                           {editStatus ? (
                              <button onClick={handleSave}>
                              <img src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png" alt="btn-icon" />
                                 Сохранить
                              </button>
                           ) : (
                              <button onClick={() => setEditStatus(true)}>
                              <img src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png" alt="btn-icon" />
                                 Редактировать
                              </button>
                           )}
                     </div>
                     </div>    
                  </div>
               </div>
            </div>
         )
         : "Details"}
      </div>
   );
};
export default TopicDetails;