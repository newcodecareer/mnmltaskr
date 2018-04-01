import React from 'react'
import { shallow } from './setup'
import Index from '../components/Index'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/custom/PrivateRoute'

let wrapper

describe('<Index />', () => {
  beforeEach(() => {
    wrapper = shallow(<Index />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Switch>', () => {
    expect(wrapper.find(Switch)).toHaveLength(1)
  })

  it('renders 2 <Route>', () => {
    expect(wrapper.find(Route)).toHaveLength(2)
  })

  it('renders 2 <PrivateRoute>', () => {
    expect(wrapper.find(PrivateRoute)).toHaveLength(2)
  })
})
