import React, { Component } from 'react'
import { Modal, Header, Button, 
  Icon, Image, Segment } from 'semantic-ui-react'
import SignupFormContainer from '../containers/SignupFormContainer'
// import { authUser } from './authUser';

export default class SignupView extends React.Component {
  render() {
    return (
      <div>
        <Image fluid src='/images/howto.gif' /> 
        <Modal open basic size='mini'>
          <Segment vertical style={{ paddingBottom: '6em' }}>
            <Button icon floated='right' inverted basic as='a' href='/'>
              <Icon name='home' />
            </Button>
            <Header inverted textAlign='left'>
              <Header.Subheader>
                HELLO, FRIEND!
              </Header.Subheader>
              <div>
                Sign up to <i>mnmltaskr</i>!
              </div>
            </Header>
            <SignupFormContainer />
          </Segment>
        </Modal>
      </div>
    )
  }
}
  