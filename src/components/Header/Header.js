import React, { useContext, useEffect, useState } from "react";
import {Link, useHistory, useParams} from "react-router-dom"
import { topicContext } from "../../TopicContext/TopicContext";
import "./Header.css";

const Header = () => {
   const{search, searchData, deleteTask, thisId} = useContext(topicContext)
   const [searchValue, setSearchValue] =useState('');
   const [gotId, setGotId] = useState()
   const history = useHistory()
   
   const handleValue = (e) =>{
      setSearchValue(e.target.value)
      search(e.target.value)
   }
   //setSearchValue('')
   // надо проверить на очистку
   //const history = useHistory()
   //console.log(history) 
   useEffect(() => {
      console.log(thisId, 'in header')
      setGotId(thisId)
   }, [thisId])

   const handleDelete = () => {
      deleteTask(gotId)
      history.push('/')
   }

   return (
      <header>
         <div className="container">
            <div className="navbar">
               <ul className="navbar__right">
                  <li><Link to="/">Все контакты</Link></li>
                  <li><Link to="/add">Добавить Контакст</Link></li>
                  <li className="search-item">
                     <input onChange={handleValue} placeholder="Поиск" />
                     <div className="search-result">
                        {searchData.map((item)=> (
                           <>
                           <Link to={`/details/${item.id}`}>
                              <div>{item.title}</div>
                           </Link>  
                           </>
                           ))}
                     </div>
                  </li>
                  <li>
                     <button onClick={handleDelete}>Удалить</button>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;