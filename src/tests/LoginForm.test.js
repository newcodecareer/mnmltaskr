import React from 'react'
import { shallow } from './setup'
import { Form, Button } from 'semantic-ui-react'
import { Field } from 'redux-form'
import LoginForm from '../components/auth-forms/LoginForm'

let wrapper
describe('<LoginForm />', () => {
  beforeEach(() => {
    wrapper = shallow(<LoginForm />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1)
  })

  it('renders <Form.Field>', () => {
    expect(wrapper.find(Form.Field).length).toBeGreaterThanOrEqual(2)
  })

  it('renders <Field>', () => {
    expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(2)
  })

  it('renders <Button>', () => {
    expect(wrapper.find(Button).length).toBeGreaterThanOrEqual(3)
  })
})
