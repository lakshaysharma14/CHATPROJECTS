import React, { Component } from 'react';
import fire from './fire';

var database =fire.database();

class Chat extends Component 
{
    constructor(props) 
    {
      super(props);
      this.state =
      {
        messages:[],
        newMessage:""

      };
    }
//x-----------------------------------------------------------------------------------------------------------x
    sendMessage()
    {
      
      database.ref("/messages").push().set({
      
      body:this.state.newMessage,
      author:"Lucky"
       
      })
    
      this.setState
      ({
        newMessage:""
      });

    }
//x------------------------------------------------------------------------------------------------------------x
    
    componentDidMount()
    {
      
        database.ref("/messages").on("child_added",(snapshot)=>{
        var msg=snapshot.val();
        var curr=this.state.messages;
        curr.push(msg);
        this.setState
        ({
          messages:curr
        })
      });
    }

//x--------------------------------------------------------------------------------------------------------------x
    render() 
    {
        return (
        <div>
        <h5>**ChatOn**</h5>
        <div>
        
        {
            this.state.messages.map((msg,i)=>{          //doubt 2
            return(
              <div key={i}>
              {msg.body} --- {msg.author}
              </div>
            );
          })
        }
      
      </div>

       <input value={this.state.newMessage} onChange={(e)=>
          {
            
            this.setState
            ({
              newMessage:e.target.value                //doubt 3
            })
          
          }}></input>


        <button onClick={()=> {this.sendMessage();} } > Send </button>
       
      </div>
    );
  }
}

export default Chat;
