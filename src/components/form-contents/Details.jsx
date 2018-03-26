import React, { Component } from 'react'
import { Form, Button, Icon, TextArea } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderTextArea = (field) => (
  <TextArea
    {...field.input} 
    placeholder='e.g. Clean my apartment from top to bottom...' 
  />
)

export default class Details extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Form as='form' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Task title</label>
          <Field 
              name='title'
              component='input'
              placeholder='e.g. Clean my 2 bedroom apartment'
              type='text'
            />
        </Form.Field>
        <Form.Field>
          <label>Describe your task in more detail</label>
          <Field 
              name='description'
              component={renderTextArea}
            />
        </Form.Field>
        <Button floated='right' type='submit' animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </Form>
    )
  }
}
