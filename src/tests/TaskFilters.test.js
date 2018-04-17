import React from 'react'
import { shallow } from './setup'
import TaskFilters from '../components/menu/TaskFilters'
import { Form, Button, Input } from 'semantic-ui-react'
import { Field } from 'redux-form'

let wrapper
describe('<TaskFilters />', () => {
  beforeEach(() => {
    wrapper = shallow(<TaskFilters />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Form>', () => {
    expect(wrapper.find(Form)).toHaveLength(1)
  })

  it('renders <Button>', () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('renders <Input>', () => {
    expect(wrapper.find(Input)).toHaveLength(1)
  })

  it('renders <Field>', () => {
    expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(3)
  })
})
