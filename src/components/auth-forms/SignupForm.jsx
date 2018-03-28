import React, { Component } from 'react'
import { Button, Form, Input, Dropdown, Divider, Grid } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderInput = (field) => (
  <Input {...field} transparent />
)

export default class SignupForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Form inverted onSubmit={handleSubmit}>
        <div
            style={{ 
              paddingTop: '2em',
              paddingBottom: '2em'
            }}
          >
          <Form.Field>
            <Field
              name='first'
              type='text'
              placeholder='Enter your first'
              component={renderInput}
            />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field
              name='last'
              type='text'
              placeholder='Enter your last name'
              component={renderInput}
            />
          </Form.Field>
          <Divider />
          <Form.Field >
            <Field 
                name='email'
                type='email'
                placeholder='Now your email'
                component={renderInput}
              />
          </Form.Field>
          <Divider />
          <Form.Field >
            <Field 
                name='password'
                type='password'
                placeholder='Decide for a secure password'
                component={renderInput}
              />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field 
              name='sex' 
              component='input' 
              type='radio' 
              value='male'
            /> Male
            <div style={{ paddingTop: '1ex' }}>
              <Field 
                name='sex' 
                component='input' 
                type='radio' 
                value='female'
              /> Female
            </div>
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field 
              name='phoneNumber'
              type='number'
              placeholder='Can I get your digits?'
              component={renderInput}
            />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field 
              name='address'
              type='text'
              placeholder='Where do you live?'
              component={renderInput}
            />
          </Form.Field>
          <Divider />
        </div>
        <Button.Group>
          <Button type='submit'>Sign up</Button>
          <Button.Or />
          <Button inverted basic as='a' href='/login'>
            Log in instead
          </Button>
        </Button.Group>
      </Form>
    )
  }
}
  