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
      messages: [1, 2, 3],
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



handleMessageClick () {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() {
  

 

    return (
      <div>
        <Toolbar />
        <MessageList messages={this.state.messages}/>
       
      </div>
    );
  }
}

export default App;

