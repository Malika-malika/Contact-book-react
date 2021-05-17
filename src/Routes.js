import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddTopics from './components/AddTopics/AddTopics';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import TopicDetails from './components/TopicDetails/TopicDetails';
import TopicContextProvider from './TopicContext/TopicContext';

const Routes = () => {
   return (
      <TopicContextProvider>
            <BrowserRouter>
               <Header />
               <Switch>
                  <Route exact path="/add" component={AddTopics}/>
                  <Route exact path="/" component={HomePage}/>``
                  <Route exact path="/details/:id" component={TopicDetails}/>
               </Switch>
         </BrowserRouter>
      </TopicContextProvider>
      
   );
};

export default Routes;