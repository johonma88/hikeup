import React, { Component } from "react";
import * as firebase from 'firebase';
import "./ChatRoom.css";

import AuthUserContext from '../Session/AuthUserContext';
// import WithAuthentication from '../Session/withAuthentication';


class ChatRoom extends Component {

constructor (props, context) {
  super(props, context)
  this.updateMessage = this.updateMessage.bind(this)
  this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message: '',
      messages: [],
      user: ''
  }

  this.authUserCallback = this.authUserCallback.bind(this);
}

componentDidMount(){
    console.log('componentDidMount')
 
    firebase.database().ref('messages/').on('value', (snapshot) => {
 
      const currentMessages = snapshot.val()

        if (currentMessages != null) {
          this.setState({
            messages: currentMessages
          })
        }
    })
}

authUserCallback(authUser, currentMessage)
{
  function loadMessages() {
    if(this.state.user !== authUser.email) {
      this.setState({
        user: authUser.email
      });
      
    }
    if(this.state.messages && this.state.messages.length > 0)
    {
      return (
      <div>
        {this.state.messages.map((message, index) => <p className="list-group-item-heading" key={message.id}>{message.user}: <br />{message.text}
                  <span><hr/></span></p>)}
        </div>)
    }
    else
    {
      return (<p>No messages.</p>)
    }
  };
  

  return (

<div className="panel" id="chatPanel" >
  <div className="panel-heading">
      <h3 className="panel-title">Hike Up Chat {authUser.email}</h3>
  </div>
  <div className="panel-body"  id="chatContainer">

{loadMessages.bind(this)()}

  </div>
  <div className="panel-footer">
    <form id="message-form">
       <input onChange={this.updateMessage} type="text" placeholder="message" id="chatMessage"/>
       <button disabled={!this.state.message} 
               onClick={this.submitMessage}>
               <span className="glyphicon glyphicon-play" aria-hidden="true" id="chatGlyphicon"></span>
        </button>
    </form>          
  </div>
</div>

  )
} 

updateMessage(event){
  this.setState({
    message: event.target.value
  })
}

submitMessage(event){
  const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message,
      user: this.state.user
    }

    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    document.getElementById('chatContainer').scrollTop = 9999999;

  event.preventDefault();
  document.getElementById("message-form").reset();
  // eslint-disable-next-line
  this.state.message = ' ';
}

  render() {

    return (
      <AuthUserContext.Consumer>
        {(authUser, currentMessage) =>
          this.authUserCallback(authUser, currentMessage)
        }
       </AuthUserContext.Consumer>
    
    );
  }
}
export default ChatRoom;