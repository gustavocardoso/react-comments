import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return <p>{ this.props.comment.comment }</p>
  }
}

export default Comment
