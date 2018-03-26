import React, { Component } from 'react'
import { Button, Form, Input, Dropdown, Divider, Grid } from 'semantic-ui-react'
import { Field } from 'redux-form'

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
                component={(field) => (
                  <Input
                      {...field.input}
                      transparent
                      placeholder='Enter your first name'
                      type='text'
                    />
                )}
              />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field
                name='last'
                component={(field) => (
                  <Input
                      {...field.input}
                      transparent
                      placeholder='Enter your last name'
                      type='text'
                    />
                )}
              />
          </Form.Field>
          <Divider />
          <Form.Field >
            <Field 
                name='email'
                component={(field) => (
                  <Input 
                      {...field.input}
                      transparent
                      placeholder='Now your email'
                      type='email'
                    />
                )}
              />
          </Form.Field>
          <Divider />
          <Form.Field >
            <Field 
                name='password'
                component={(field) => (
                  <Input 
                      {...field.input}
                      transparent
                      placeholder='Decide for a secure password'
                      type='password'
                    />
                )}
              />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field 
              name="sex" 
              component="input" 
              type="radio" 
              value="male"/> Male
            <div style={{ paddingTop: '1ex' }}>
              <Field 
                name="sex" 
                component="input" 
                type="radio" 
                value="female"/> Female
            </div>
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field 
                name='phoneNumber'
                component={(field) => (
                  <Input 
                      {...field.input}
                      transparent
                      placeholder='Can I get your digits?'
                      type='number'
                    />
                )}
              />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Field 
                name='address'
                component={(field) => (
                  <Input
                      {...field.input}
                      transparent
                      placeholder='Where do you live?'
                      type='text'
                    />
                )}
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
  