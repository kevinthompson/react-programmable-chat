import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import './MessageList.css'

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    messages: [],
  }

  componentDidUpdate = () => {
    this.node.scrollTop = this.node.scrollHeight
  }

  render() {
    return (
      <div className="MessageList" ref={(node) => (this.node = node)}>
        {this.props.messages.map((message, i) => (
          <Message key={i} {...message} />
        ))}
      </div>
    )
  }
}

export default MessageList
