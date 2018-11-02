import React, { Component } from "react";
import "./App.css";
import Toolbar from "./Components/Toolbar.js";
import Message from "./Components/Message.js";
import ClickedMessage from "./Components/ClickedMessage.js"
import MessageList from "./Components/MessageList.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      subject: "", 
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/messages");
    const json = await response.json();
    this.setState({
      messages: json
    });
   
    console.log("messages", this.state.messages);
  }

markAsReadButtonClicked = () => {
  console.log("markAsReadButtonClicked was clicked!")
  // const markAsRead = 

}

messageSelected = (id) => {
  console.log("message selected")
 
    const selectedMessage = this.state.messages.map(message => {
    if (message.id === id) {
      message.selected = !message.selected;
    }
    return message;})


  this.setState({
    messages: selectedMessage

  })


}




messageRead = async (id) => {
  console.log("message read!", id);
  
  let message = {
      messageIds: [id],
      command: "read",
      "read": true
    }

    const updateMessages = await fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

  const updatedMessages = this.state.messages.map(message => {
    if (message.id === id) {
      message.read = !message.read;
    }
    return message;
  })

  this.setState({
    messages: updatedMessages
  })
}



  render() {

// const subjects = this.state.messages.map(sub => <MessageList messages={this.state.messages} subjects={sub.subject}/>)

    return (
     
      <div>
        <Toolbar markAsReadButtonClicked={this.markAsReadButtonClicked}/>
        <MessageList messages={this.state.messages} messageRead={this.messageRead} messageSelected={this.messageSelected} />
       
      </div>
    );
  }
}

export default App;

