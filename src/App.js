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
      subject: [], 
      isChecked: false
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



handleMessageClick () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
  

  // const isChecked = this.state.isChecked


  //   const subjects = this.state.messages.map(msg => (
  //     <Message subjects={msg.subject} isChecked={this.isChecked} handleMessageClick={this.props.handleMessageClick}/>
  //   ));

    return (
      <div>
        <Toolbar />
       
      </div>
    );
  }
}

export default App;

 // <MessageList subjects={subjects} isChecked={isChecked} handleMessageClick={this.handleMessageClick}/>