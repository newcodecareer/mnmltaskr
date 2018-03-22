import React, { Component } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <Form.Field>
          <label>Task title</label>
          <input placeholder='e.g. Clean my 2 bedroom apartment' />
        </Form.Field>
        <Form.TextArea 
          label='Describe your task in more detail' 
          placeholder='e.g. Clean my apartment from top to bottom...' />
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
