import React from 'react'
import { shallow } from './setup'
import { Form, Button } from 'semantic-ui-react'
import { Field } from 'redux-form'
import SignupForm from '../components/auth-forms/SignupForm'

let wrapper
describe('<SignupForm />', () => {
  beforeEach(() => {
    wrapper = shallow(<SignupForm />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1)
  })

  it('renders <Field>', () => {
    expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(7)
  })

  it('renders <Form.Field>', () => {
    expect(wrapper.find(Form.Field).length).toBeGreaterThanOrEqual(1)
  })

  it('renders <Button>', () => {
    expect(wrapper.find(Button).length).toBeGreaterThanOrEqual(3)
  })
})
