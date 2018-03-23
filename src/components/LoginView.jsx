import React, { Component } from 'react'
import { Modal, Header, 
  Image, Segment } from 'semantic-ui-react'
import LoginFormContainer from '../containers/LoginFormContainer'
import { authUser } from './authUser';

export default class LoginView extends React.Component {
  render() {
    return (
      <div>
        <Image fluid src='/images/howto.gif' /> 
        <Modal open basic size='mini'>
          <Segment vertical
              style={{ paddingBottom: '6em' }}
            >
            <Header inverted textAlign='left'>
              <Header.Subheader>
                HELLO, FRIEND!
              </Header.Subheader>
              <div>
                Login to your <i>mnmltaskr</i> account
              </div>
            </Header>
            <LoginFormContainer onSubmit={authUser} />
          </Segment>
        </Modal>
      </div>
    )
  }
}
  