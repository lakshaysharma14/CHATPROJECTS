import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Chat from './Chat';
import Home from './Home';
import Profile from './Profile';

class App extends Component 
{
  render() 
  {
  	  return (
      <Router>
      
      <div>
      
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/profile/:id" component={Profile}></Route>
      <Route exact path="/chat" component={Chat}></Route>
      </div>

      </Router>
    );
  }
}

export default App;
