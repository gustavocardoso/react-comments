import React from 'react'

const Comment = props => (
  <div className='card'>
    <p className='card-body'>
      { props.comment.comment }
      <br />
      Por: { props.comment.user.name }
    </p>
  </div>
)

export default Comment
