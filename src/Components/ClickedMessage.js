import React, { Component } from 'react'

class ClickedMessage extends Component {
    render () {
        return (
            <div class="row message read selected">
            <div class="col-xs-1">
              <div class="row">
                <div class="col-xs-2">
                  <input type="checkbox" checked="checked" />
                </div>
                <div class="col-xs-2">
                  <i class="star fa fa-star-o"></i>
                </div>
              </div>
            </div>
            <div class="col-xs-11">
              <a href="#">
                Here is some message text that has a bunch of stuff
              </a>
            </div>
          </div>
        )
    }
}

export default ClickedMessage;