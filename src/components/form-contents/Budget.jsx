import React, { Component } from 'react'
import { Form, Button, Icon, Label, Input } from 'semantic-ui-react'

export default class Budget extends React.Component {
  render() {
    return (
      <div>
        <Form.Field>
          <label>How many people do you need for your task?</label>
          <input type='number' placeholder='Number of taskers'/>
        </Form.Field>
        <Form.Field>
          <label>What is your budget? </label>
          <Input labelPosition='right' type='number' placeholder='Amount'>
            <Label basic>&#8369;</Label>
            <input />
            <Label>per hour</Label>
          </Input>
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
