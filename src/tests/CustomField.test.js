import React from 'react'
import { shallow } from './setup'
import CustomField from '../components/custom/CustomField'
import { Field } from 'redux-form'
import { Form } from 'semantic-ui-react'

let wrapper
describe('<CustomField />', () => {
  beforeEach(() => {
    wrapper = shallow(<CustomField />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('contains <Form.Field>', () => {
    expect(wrapper.find(Form.Field)).toHaveLength(1)
  })

  it('contains <Field>', () => {
    expect(wrapper.find(Field)).toHaveLength(1)
  })
})
