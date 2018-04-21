import React, { Component } from "react";
import * as firebase from 'firebase';
import "./ChatRoom.css";

import AuthUserContext from '../Session/AuthUserContext';
import WithAuthentication from '../Session/withAuthentication';


class ChatRoom extends Component {

constructor (props, context) {
  super(props, context)
  this.updateMessage = this.updateMessage.bind(this)
  this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message: '',
      messages: [],
      user: ""
  }
}

componentDidMount(){
    console.log('componentDidMount')
 
    firebase.database().ref('messages/').on('value', (snapshot)=> {
 
      const currentMessages = snapshot.val()

        if (currentMessages != null) {
          this.setState({
          
            messages: currentMessages
          })
        }
    })
}


updateMessage(event){
  console.log('updateMessage:'+event.target.value)
  this.setState({
    message: event.target.value
  })
}

submitMessage(event){
  console.log('submitMessage: '+this.state.message)

  const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }

    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)

}


  render() {

    const currentMessage = this.state.messages.map((message, i) => {
      return (
    
        
         <p class="list-group-item-heading" key={message.id}>{message.text}</p>
      )
    })

   
    

    return (
      <AuthUserContext.Consumer>
      {authUser =>
       <div className="panel" id="chatPanel" >
          <div className="panel-heading">
              <h3 className="panel-title">Hike Up Chat</h3>
              {/* <h3 className="panel-title">Hike Up Chat {authUser.email}</h3> */}
          </div>
          <div className="panel-body"  id="chatContainer">
        
        {/* <p>{authUser.email}: {currentMessage}</p> <br /> */}
        <p> {currentMessage}</p> <br />
          </div>
          <div className="panel-footer">
               <input onChange={this.updateMessage} type="text" placeholder="message" id="chatMessage"/>
                <button onClick={this.submitMessage}><span class="glyphicon glyphicon-play" aria-hidden="true" id="chatGlyphicon"></span></button>
          </div>
     </div>
      }
      </AuthUserContext.Consumer>
    
    );
  }
}


export default ChatRoom;