import React, { Component } from 'react'
import './App.css'
import Toolbar from "./Components/Toolbar.js"
import Messages from "./Components/Message.js"
import MessageList from "./Components/MessageList.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mesages: []
    }
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({
      messages: json})
  }
  
  render() {
    console.log(this.state.messages)
    return (
      <div>Hey this is a div</div>
    );
  }
}

export default App;
