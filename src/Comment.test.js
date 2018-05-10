import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Comment from './Comment'

describe('<Comment />', () => {
  it('should render without crashing', () => {
    const commentMock = { comment: 'new comment' }
    const wrapper = shallow(<Comment comment={ commentMock } />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.is('.card')).toBe(true)
    expect(wrapper.text()).toBe(commentMock.comment)
  })
})
