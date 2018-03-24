import React from 'react'
import { shallow } from './setup'
import Index from '../components/Index'
import ItemsContainer from '../containers/ItemsContainer'
import Body from '../components/Body.jsx'

describe('<Index />', () => {
  it('renders itself', () => {
    const wrapper = shallow(<Index />)

    expect(wrapper).toHaveLength(1)
  })

  it('renders menubar <ItemsContainer />', () => {
    const wrapper = shallow(<Index />)

    expect(wrapper.find(ItemsContainer)).toHaveLength(1)
  })

  it('renders <Body />', () => {
    const wrapper = shallow(<Index />)

    expect(wrapper.find(Body)).toHaveLength(1)
  })
})
