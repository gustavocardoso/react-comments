import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from './App'

describe('<App />', () => {
  const base = {
    syncState: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={ base } />)
    expect(wrapper.length).toBe(1)
  })

  it('should have .container class', () => {
    const wrapper = shallow(<App base={ base } />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('should show <NewComment /> component', () => {
    const wrapper = shallow(<App base={ base } />)
    expect(wrapper.find('NewComment').length).toBe(1)
  })

  it('should add new comment to the state when NewComment is called', () => {
    const wrapper = mount(<App base={ base } />)
    
    wrapper.instance().postNewComment({ comment: 'this is a comment' })
    wrapper.instance().postNewComment({ comment: 'this is a comment' })
    wrapper.instance().postNewComment({ comment: 'this is a comment' })
    
    const comments = Object.keys(wrapper.instance().state.comments)
    
    expect(comments.length).toBe(3)
  })

  it('should show <Comments /> component', () => {
    const wrapper = shallow(<App base={ base } />)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  // it('should outputs the <App />', () => {
  //   const wrapperShallow = shallow(<App />)
  //   const wrapperMount = mount(<App />)
  //   const wrapperRender = render(<App />)

  //   console.log(wrapperMount.debug())
  // })
})
