import React, { Component } from 'react'
import { Modal, Header, Button, Icon,
  Image, Segment } from 'semantic-ui-react'

export default class FormWrapper extends Component {
  render () {
    const { message, children } = this.props

    return (
      <div>
        <Image fluid src='/images/howto.gif' />
        <Modal open basic size='mini'>
          <Segment vertical style={{ paddingBottom: '6em' }}>
            <Button
              as='a' href='/'
              floated='right'
              icon circular
              basic inverted
            >
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
