import React from 'react'
// import './localStorageMock'
import { shallow } from './setup'
import Header from '../components/Header'
import { Menu, Container, Icon, Button } from 'semantic-ui-react'

let wrapper

describe('<Header />', () => {
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('contains <Menu>', () => {
    expect(wrapper.find(Menu)).toHaveLength(1)
  })

  it('contains <Container>', () => {
    expect(wrapper.find(Container)).toHaveLength(1)
  })

  it('contains <Menu.Item>', () => {
    expect(wrapper.find(Menu.Item).length).toBeGreaterThan(1)
  })

  it('contains 2 <Icon>', () => {
    expect(wrapper.find(Icon)).toHaveLength(2)
  })

  it('contains <Menu.Menu>', () => {
    expect(wrapper.find(Menu.Menu)).toHaveLength(1)
  })

  it('contains <Button>', () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('contains 2 <Button.Content>', () => {
    expect(wrapper.find(Button.Content)).toHaveLength(2)
  })
})
