import React, { Component } from 'react'
import Message from "./Message"

class MessageList extends Component {
    render () {
        

        
        return (
        <div>
        <Message subjects={this.props.subjects}/>
        </div>
        )
    }
}

export default MessageList;