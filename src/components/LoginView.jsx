import React, { Component } from 'react'
import { Modal, Button, Header, Icon, Image, Form, Divider, Segment } from 'semantic-ui-react'

export default class LoginView extends React.Component {
  render() {
    return (
      <div>
        <Image fluid src='/images/blurred.jpg' /> 
        <Modal open basic size='mini'>
          <Segment vertical
            style={{ paddingBottom: '6em' }}>
            <Header inverted textAlign='left'>
              <Header.Subheader>
                HELLO, FRIEND!
              </Header.Subheader>
              <div>
                Login to your <i>mnmltaskr</i> account
              </div>
            </Header>
            <Divider />
            <Form>
              <Form.Input
                transparent
                inverted
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Email address' />
              <Divider />
              <Form.Input
                fluid
                inverted
                transparent
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password' />
              <Divider />
            </Form>
            <Button.Group>
              <Button>Login</Button>
              <Button.Or />
              <Button inverted basic>Sign up instead</Button>
            </Button.Group>
          </Segment>
        </Modal>
      </div>
    )
  }
}
  