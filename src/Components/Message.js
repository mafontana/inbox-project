import React, { Component } from 'react'
import "../App.css"

let Message = (props) => {
        console.log(props)
    return (
            <div class={props.email.read ? "row message read" : "row message unread"} onClick={() => props.messageRead(props.email.id)}>
            <div class="col-xs-1">
              <div class="row">
                <div class="col-xs-2">
                  <input type="checkbox"  checked={props.email.selected && "checked"}/>
                </div>
                <div class="col-xs-2">
                  <i class="star fa fa-star-o"></i>
                </div>
              </div>
            </div>
            <div class="col-xs-11">
              <a href="#">
                {props.email.subject}
              </a>
            </div>
          </div>
         )
}

export default Message;

//<input type="checkbox"  checked={props.email.selected && "checked"}/>