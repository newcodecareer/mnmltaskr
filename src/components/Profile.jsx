import React, { Component } from 'react'
import { Divider, Button, Sidebar, Container, Image, List } from 'semantic-ui-react'
import { getUser } from '../actions/firestore-actions/authUser'

const renderInfo = (user) => {
  const photoSrc = user.gender === 'male'
    ? '/images/matthew.png'
    : '/images/molly.png'

  return (
    <div>
      <div style={{ paddingTop: '8vh' }}>
        <Image
          src={photoSrc}
          size='small'
          circular centered
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '3ex',
          padding: '1ex'
        }}
      >
        Hello, <b>{user.firstName}</b>!
      </div>
      <Divider />
      <List>
        <List.Item>
          <List.Content>
            <List.Header>
              {user.firstName + ' ' + user.lastName}
            </List.Header>
            <List.Description>
            Name
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>
              {user.email}
            </List.Header>
            <List.Description>
            Email
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>
              {user.phoneNumber}
            </List.Header>
            <List.Description>
            Phone number
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>
              {user.address}
            </List.Header>
            <List.Description>
            Address
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  )
}

export default class Profile extends Component {
  render () {
    const { visible, toggleSidebar } = this.props
    const user = getUser()

    return (
      <Sidebar
        as={Container}
        style={{
          backgroundColor: 'whitesmoke',
          padding: '2ex'
        }}
        animation='overlay'
        visible={visible}
      >
        <Button
          icon='arrow left'
          size='mini' circular
          floated='right'
          onClick={toggleSidebar}
        />
        {user && renderInfo(user)}
      </Sidebar>
    )
  }
}
