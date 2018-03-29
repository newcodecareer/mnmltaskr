import React, { Component } from 'react'
import { Button, Form, Input, Divider, Label } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderInput = (field) => {
  const { meta } = field
  const hasError = meta.touched && meta.error

  return (
    <Form.Field>
      <Input {...field} transparent />
      <Divider inverted style={{ marginBottom: '0em' }} />
      {
        hasError &&
        <Label style={{ float: 'right' }} color='red' pointing='above'>
          {meta.error}
        </Label>
      }
    </Form.Field>
  )
}

const options = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

export default class SignupForm extends Component {
  render () {
    const { handleSubmit, submitting } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            paddingTop: '2em',
            paddingBottom: '2em'
          }}
        >
          <Field
            name='first'
            type='text'
            placeholder='Enter your first'
            component={renderInput}
          />
          <Field
            name='last'
            type='text'
            placeholder='Enter your last name'
            component={renderInput}
          />
          <Field
            name='email'
            type='email'
            placeholder='Now your email'
            component={renderInput}
          />
          <Field
            name='password'
            type='password'
            placeholder='Decide for a secure password'
            component={renderInput}
          />
          <Form.Field>
            {
              options.map((option, index) => (
                <label key={index}
                  style={{ color: 'white' }}
                >
                  <Field
                    name='sex'
                    type='radio'
                    component='input'
                    value={option.value}
                  /> {option.label}
                </label>
              ))
            }
            <Divider inverted style={{ marginBottom: '0em' }} />
          </Form.Field>
          <Field
            name='phoneNumber'
            type='number'
            placeholder='Can I get your digits?'
            component={renderInput}
          />
          <Field
            name='address'
            type='text'
            placeholder='Where do you live?'
            component={renderInput}
          />
        </div>
        <Button.Group>
          <Button type='submit' disabled={submitting}>Sign up</Button>
          <Button.Or />
          <Button
            as='a' href='/login'
            inverted basic
            disabled={submitting}
          >
            Log in instead
          </Button>
        </Button.Group>
      </Form>
    )
  }
}
