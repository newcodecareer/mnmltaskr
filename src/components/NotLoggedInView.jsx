import React, { Component } from 'react'
import { Message, Icon, Image, Container } from 'semantic-ui-react'

export default class LoginView extends Component {
  render () {
    return (
      <Container text>
        <Message negative icon>
          <Icon name='warning circle' />
          <Message.Content>
            <Message.Header>You haven&apos;t logged in yet!</Message.Header>
            <p>Hi, friend. Please <a href='/login'>login</a> to continue.</p>
          </Message.Content>
        </Message>
        <Image size='large' src='/images/cards.png' centered />
      </Container>
    )
  }
}
