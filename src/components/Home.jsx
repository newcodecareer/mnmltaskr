import React, { Component } from 'react'
import { Header, Image, Label, Dimmer } from 'semantic-ui-react'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header size='huge' textAlign='center'>
          Hello, friend.
          Welcome to <i style={{ color: 'blue' }}>mnmltaskr</i>!
        </Header>
        <Image centered fluid src='/images/home.gif' />
        <Label size='mini' attached='bottom right'>Photo stolen from 
          <a href='https://www.airtasker.com/'> https://www.airtasker.com/</a>
        </Label>
      </div>
    )
  }
}
