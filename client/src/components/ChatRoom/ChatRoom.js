import React, { Component } from "react";
import API from "../../utils/API";
import * as firebase from 'firebase'

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
// var list = Object.assign([], this.state.messages)
// list.push(nextMessage)
// this.setState({
//   messages: list
// })
}

  render() {

    const currentMessage = this.state.messages.map((message, i) => {
      return (
        <h4 class="list-group-item-heading" key={message.id}>{message.text}</h4>
      )
    })

    return (

        // <div>
        //   <ol>
        //       {currentMessage}
        //     </ol>
        //     <input onChange={this.updateMessage} type="text" placeholder="message" />
        //     <br />
        //     <button onClick={this.submitMessage}>Submit Message</button>
        // </div>
      <div className="container">
        <div class="list-group">
        
        <p>{currentMessage}</p>
        
        <div class="input-group input-group-lg">
        <input onChange={this.updateMessage} type="text" placeholder="message" />
        <button onClick={this.submitMessage}>Submit Message</button>
        </div>
      </div>
      </div>
    
    );
  }
}

export default ChatRoom;