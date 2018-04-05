import React, { Component } from 'react'

class NewComment extends Component {
  handleComment = event => {
    if (event.keyCode === 13) {
      event.preventDefault()

      this.props.postNewComment({
        comment: this.refs.comment.value
      })

      this.refs.comment.value = ''
    }
  }

  render() {
    return (
      <div className="row">
        <textarea ref="comment" placeholder="Comente!" className="form-control" onKeyDown={ this.handleComment }></textarea>
      </div>
    )
  }
}

export default NewComment
