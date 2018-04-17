import React from 'react'
import { shallow } from './setup'
import { Image, Modal, Segment, Header } from 'semantic-ui-react'
import FormWrapper from '../components/auth-forms/FormWrapper'

let wrapper
describe('<FormWrapper />', () => {
  beforeEach(() => {
    wrapper = shallow(<FormWrapper />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Image>', () => {
    expect(wrapper.find(Image)).toHaveLength(1)
  })

  it('renders <Modal>', () => {
    expect(wrapper.find(Modal)).toHaveLength(1)
  })

  it('renders <Segment>', () => {
    expect(wrapper.find(Segment).length).toBeGreaterThanOrEqual(1)
  })

  it('renders <Header>', () => {
    expect(wrapper.find(Header).length).toBeGreaterThanOrEqual(1)
  })
})
