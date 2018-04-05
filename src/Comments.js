import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component {
  renderComment(key, comment) {
    return (
      <Comment comment={ comment } key={ key } />
    )
  }

  render() {
    return (
      <div>
        <h2>Commentários</h2>
        { Object.keys(this.props.comments).map(key => this.renderComment(key, this.props.comments[key])) }
      </div>
    )
  }
}

export default Comments
