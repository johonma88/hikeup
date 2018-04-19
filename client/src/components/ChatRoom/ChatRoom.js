import React, { Component } from "react";
import API from "../../utils/API";
import * as firebase from 'firebase';
import "./ChatRoom.css";
import {GenericScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';



class ChatRoom extends Component {

constructor (props, context) {
  super(props, context)
  this.updateMessage = this.updateMessage.bind(this)
  this.submitMessage = this.submitMessage.bind(this)
    this.state = {
      message: '',
      messages: []
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
        <h4 class="list-group-item-heading" key={message.id}>{message.text}</h4>
      )
    })

   
    

    return (

    <div>
       <h3 id="chatHeader"> Hike Up Chat </h3>
      <div id="chatContainer">
      
       <div className="list-group" id="chatBody">
            
               <p>{currentMessage}</p> <br />
              
              
            </div>
          </div>
          {/* <div className="input-group input-group-lg"> */}
               <input onChange={this.updateMessage} type="text" placeholder="message" />
               <button onClick={this.submitMessage}><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
               {/* </div> */}
      </div>
       

    
    );
  }
}


export default ChatRoom;