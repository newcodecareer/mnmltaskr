import React, { Component } from 'react'
import { Form, Button, Select, Icon } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'In person', value: 1 },
  { key: 2, text: 'Online', value: 2 },
]

export default class Location extends React.Component {
  render() {
    return (
      <div>
        <Form.Field>
          <label>Where would the task be completed?</label>
          <Select placeholder='Type of task' options={options} />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <input placeholder='Enter a suburb' />
        </Form.Field>
        <Form.Field>
          <label>Due date</label>
          <input type='date' />
        </Form.Field>
        <Button type='submit' animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    )
  }
}
