import React, { Component } from 'react';
import fire from './fire';

var database=fire.database();

class Profile extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      user:null
    }
  }



  componentDidMount()
  {
      var id=this.props.match.params.id;                                  //DOUBT 1
    
      database.ref("/users/" + id).once("value").then((snapshot)=>{
      var user=snapshot.val()
      console.log(user);
      this.setState
      ({
        user:user
      })
    
    })
  }

  render() 
  {
    var id = this.props.match.params.id;                                //Doubt 2
    console.log(id);

      return (
       <div >
      
       <p>Profile {id}</p>
       {
          this.state.user?
          <div>

          {this.state.user.name} is {this.state.user.age} years old.
          
          </div> 
          : 
          null        
       }

      
      </div>
    );
  }

}

export default Profile;
