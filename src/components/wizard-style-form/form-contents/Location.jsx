import React, { Component } from 'react'
import { Form, Button, Dropdown, Icon } from 'semantic-ui-react'
import { Field } from 'redux-form'

const options = [
  { key: 1, text: 'In person', value: 'In person' },
  { key: 2, text: 'Online', value: 'Online' },
]

const renderDropdown = (field) => (
  <Dropdown
    {...field.input}
    onChange={(param, data) => field.input.onChange(data.value)}
    value={field.input.value}
    placeholder='Type of task' 
    options={options}
    selection 
  />  
)

export default class Location extends React.Component {
  render() {
    const { handleSubmit, goToPrev } = this.props

    return (
      <Form as='form' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Where would the task be completed?</label>
          <Field 
              name='type'
              component={renderDropdown}
            />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Field
            name='location'
            component='input'
            placeholder='Enter a suburb'
            type='text'
          />
        </Form.Field>
        <Form.Field>
          <label>Due date</label>
          <Field
            name='due'
            component='input'
            type='date'
          />
        </Form.Field>
        <Button.Group floated='right'>
          <Button onClick={goToPrev} animated>
            <Button.Content visible>Previous</Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
          <Button.Or />
          <Button type='submit' animated>
            <Button.Content visible>Next</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </Button.Group>
      </Form>
    )
  }
}
