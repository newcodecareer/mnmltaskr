import React, { Component } from 'react'
import { Button, Form, Divider, Input } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderEmailInput = (field) => (
  <Input 
      {...field.input}
      inverted
      transparent fluid
      icon='user'
      iconPosition='left'
      placeholder='Email address'
    />
)

const renderPassInput = (field) => (
  <Input 
      {...field.input}
      inverted
      transparent fluid
      icon='lock'
      iconPosition='left'
      placeholder='password'
      type='password'
    />
)

export default class LoginForm extends React.Component {
  render() {
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
                component={renderEmailInput}
              />
          </Form.Field>
          <Divider />
          <Form.Field >
            <Field 
                name='password'
                type='password'
                component={renderPassInput}
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
  