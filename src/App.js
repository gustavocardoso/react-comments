import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user })
      } else {
        this.setState({ isLoggedIn: false, user: {} })
      }
    })

    this.postNewComment = this.postNewComment.bind(this)
  }

  postNewComment(comment) {
    const comments = { ...this.state.comments }
    const timestamp = Date.now()

    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }

  auth (provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        { this.state.isLoggedIn &&
          <div>
            <p>
              Logado como: { this.state.user.displayName } &nbsp;
              <img src={ this.state.user.photoURL } alt={ this.state.user.displayName } /> &nbsp;
              <button onClick={ () => this.props.auth.signOut() }>Logout</button>
            </p>
            <NewComment postNewComment={ this.postNewComment } />
          </div>
        }

        { !this.state.isLoggedIn &&
          <div className="alert alert-info">
            <button onClick={ () => this.auth('facebook') }>Entre como Facebook para comentar</button>
          </div>
        }

        <Comments comments={ this.state.comments } />
      </div>
    )
  }
}

export default App
