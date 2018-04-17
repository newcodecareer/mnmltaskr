import React from 'react'
import { shallow } from './setup'
import Body from '../components/Body'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../components/custom/PrivateRoute'

let wrapper

describe('<Index />', () => {
  beforeEach(() => {
    wrapper = shallow(<Body />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Switch>', () => {
    expect(wrapper.find(Switch)).toHaveLength(1)
  })

  it('renders <Route>', () => {
    expect(wrapper.find(Route).length).toBeGreaterThanOrEqual(1)
  })

  it('renders <PrivateRoute>', () => {
    expect(wrapper.find(PrivateRoute).length).toBeGreaterThan(1)
  })
})
