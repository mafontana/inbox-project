import React, { Component } from "react";
import "./App.css";
import Toolbar from "./Components/Toolbar.js";
import Message from "./Components/Message.js";
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
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/messages");
    const json = await response.json();
    this.setState({
      messages: json 
      // subject: response[0].subject
    });
    console.log("messages", this.state.messages)
  }



  render() {
    console.log("new console log", this.state.messages);

  const subjects = this.state.messages.map(msg => <Message subjects={msg.subject} />)



    return (
      <div>
        <Toolbar />
        <MessageList subjects={subjects} />
      </div>
    );
  }
}

export default App;
