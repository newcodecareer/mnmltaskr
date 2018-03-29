import React, { Component } from 'react'
import { Button, Form, Divider, Input } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderInput = (field) => (
  <Input
    {...field}
    inverted
    transparent fluid
    iconPosition='left'
  />
)

export default class LoginForm extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <Form as='form' onSubmit={handleSubmit}>
        <div
          style={{
            paddingTop: '2em',
            paddingBottom: '2em'
          }}
        >
          <Form.Field >
            <Field
              name='email'
              type='email'
              icon='user'
              placeholder='Email address'
              component={renderInput}
            />
          </Form.Field>
          <Divider />
          <Form.Field >
            <Field
              name='password'
              type='password'
              icon='lock'
              placeholder='Enter your password'
              component={renderInput}
            />
          </Form.Field>
          <Divider />
        </div>
        <div>
          <Button.Group>
            <Button type='submit'>Login</Button>
            <Button.Or />
            <Button inverted basic as='a' href='/signup'>
              Sign up instead
            </Button>
          </Button.Group>
        </div>
      </Form>
    )
  }
}
