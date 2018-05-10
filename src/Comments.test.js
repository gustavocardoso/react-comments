import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Comments from './Comments'

describe('<Comments />', () => {
  it('should render without crashing', () => {
    const commentsMock = {
      '1': {
        comment: 'first new comment'
      },
      '2': {
        comment: 'second new comment'
      }
    }
    const wrapper = shallow(<Comments comments={ commentsMock } />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('Comment').length).toBe(2)
  })
})
