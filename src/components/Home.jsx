import React, { Component } from 'react'
import { Header, Image, Label, Container } from 'semantic-ui-react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Container text>
          <Header size='huge'>
            Hello, friend.
            Welcome to <i style={{ color: 'blue' }}>mnmltaskr</i>!
          </Header>
        </Container>
        <Image centered fluid src='/images/home.gif' />
        <Label size='mini' attached='bottom right'>Photo stolen from
          <a href='https://www.airtasker.com/'> https://www.airtasker.com/</a>
        </Label>
      </div>
    )
  }
}
