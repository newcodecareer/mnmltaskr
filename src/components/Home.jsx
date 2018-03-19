import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class Home extends React.Component {
  render() {
    return (
      <Header size='huge' textAlign='center'>
        Hello, friend.
        Welcome to <span style={{ color: 'red' }}>mnmltaskr</span>!
      </Header>
    )
  }
}
