import React, { Component } from 'react'
import { Button, Form, Divider, Input } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderInput = (field) => (
  <Input
    {...field}
  />
)

export default class LoginForm extends Component {
  render () {
    const { handleSubmit, submitting } = this.props

    return (
      <Form inverted onSubmit={handleSubmit}>
        <div
          style={{
            paddingTop: '2em',
            paddingBottom: '2em'
          }}
        >
          <Form.Field >
            <label>Email</label>
            <Field
              name='email'
              type='email'
              icon='user'
              placeholder='Email address'
              component={renderInput}
            />
          </Form.Field>
          <Form.Field >
            <label>Password</label>
            <Field
              name='password'
              type='password'
              icon='lock'
              placeholder='Enter your password'
              component={renderInput}
            />
          </Form.Field>
        </div>
        <div>
          <Divider />
          <Button
            type='submit'
            circular
            disabled={submitting}
          >
              Login
          </Button>
          <Button
            as='a' href='/signup'
            inverted basic
            circular
            disabled={submitting}
          >
              Sign up instead
          </Button>
        </div>
      </Form>
    )
  }
}
