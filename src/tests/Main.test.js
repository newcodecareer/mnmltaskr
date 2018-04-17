import React from 'react'
import { shallow } from './setup'
import { Sidebar } from 'semantic-ui-react'
import Main from '../components/Main'
import Menu from '../containers/MenuContainer'
import Body from '../components/Body'

let wrapper

describe('<Main />', () => {
  beforeEach(() => {
    wrapper = shallow(<Main />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Sidebar.Pushable>', () => {
    expect(wrapper.find(Sidebar.Pushable)).toHaveLength(1)
  })

  it('renders <Sidebar.Pusher>', () => {
    expect(wrapper.find(Sidebar.Pusher)).toHaveLength(1)
  })

  it('renders <Menu />', () => {
    expect(wrapper.find(Menu)).toHaveLength(1)
  })

  it('renders <Body />', () => {
    expect(wrapper.find(Body)).toHaveLength(1)
  })
})
