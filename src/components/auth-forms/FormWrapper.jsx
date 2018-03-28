import React, { Component } from 'react'
import { Modal, Header, Button, Icon,
  Image, Segment } from 'semantic-ui-react'

export default class FormWrapper extends React.Component {
  render() {
    const { message, children } = this.props

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
              {message}
            </Header>
              {children}
          </Segment>
        </Modal>
      </div>
    )
  }
}