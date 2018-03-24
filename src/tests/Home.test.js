import React from 'react'
import { shallow } from './setup'
import Home from '../components/Home'
import { Header, Image, Label } from 'semantic-ui-react'

let wrapper

describe('<Index />', () => {
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Header>', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })

  it('renders <Image>', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })

  it('renders <Label>', () => {
    expect(wrapper.find(Label)).toHaveLength(1)
  })
})
