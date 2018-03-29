import React, { Component } from 'react'
import { Form, Button, Icon, Label, Input } from 'semantic-ui-react'
import { Field } from 'redux-form'

export default class Budget extends Component {
  render () {
    const { handleSubmit, pristine, submitting, goToPrev } = this.props

    return (
      <Form as='form' onSubmit={handleSubmit}>
        <Form.Field>
          <label>How many people do you need for your task?</label>
          <Field
            name='numberOfTaskers'
            component='input'
            placeholder='Number of taskers'
            type='number'
          />
        </Form.Field>
        <Form.Field>
          <label>What is your budget? </label>
          <Input labelPosition='right'>
            <Label basic>&#8369;</Label>
            <Field
              name='budget'
              component='input'
              placeholder='Amount'
              type='number'
            />
            <Label>/hour</Label>
          </Input>
        </Form.Field>
        <Button.Group floated='right'>
          <Button onClick={goToPrev} animated>
            <Button.Content visible>Previous</Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
          <Button.Or />
          <Button type='submit' animated
            // from the docu
            disabled={pristine || submitting}
          >
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </Button.Group>
      </Form>
    )
  }
}
