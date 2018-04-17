import React from 'react'
import { shallow } from './setup'
import { Form, Button, Popup } from 'semantic-ui-react'
import CustomField from '../components/custom/CustomField'
import Budget from '../components/wizard-form/contents/Budget'

let wrapper
describe('<Budget />', () => {
  beforeEach(() => {
    wrapper = shallow(<Budget />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1)
  })

  it('renders <CustomField>', () => {
    expect(wrapper.find(CustomField).length).toBeGreaterThanOrEqual(2)
  })

  it('renders <Form.Field>', () => {
    expect(wrapper.find(Form.Field).length).toBeGreaterThanOrEqual(1)
  })

  it('renders <Popup>', () => {
    expect(wrapper.find(Popup).length).toBeGreaterThanOrEqual(1)
  })

  it('renders <Button>', () => {
    expect(wrapper.find(Button).length).toBeGreaterThanOrEqual(2)
  })
})
