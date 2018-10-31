import React, { Component } from 'react'
import Message from "./Message"

let MessageList = (props) => {
    console.log("props", props)    
    return (
            props.messages.map(message => {
                return <Message email={message}/>
            })


        )
}

export default MessageList;