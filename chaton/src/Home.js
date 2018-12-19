import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component 
{

  render() 
  {
  	  return (
       
       <div>
      
       <p>Home</p>
      
       <Link to="/profile/123">View Profile</Link>
      	
       <br/>
      
       <Link to="/chat">Chat</Link>
      
      </div>
    );
  }

}

export default Home;
