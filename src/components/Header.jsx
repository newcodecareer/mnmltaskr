import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'
import { logout } from '../actions/firestore-actions/authUser'

const signInButton = () => (
  <Button as='a' href='/login' basic animated>
    <Button.Content visible>
      Sign in
    </Button.Content>
    <Button.Content hidden>
      <Icon color='black' name='sign in' />
    </Button.Content>
  </Button>
)

const logoutButton = () => (
  <Button onClick={logout} basic animated>
    <Button.Content visible>
      Logout
    </Button.Content>
    <Button.Content hidden>
      <Icon color='black' name='sign out' />
    </Button.Content>
  </Button>
)

export default class Header extends Component {
  render () {
    const { activeItem, selectItem, isActive } = this.props
    const whichButton = !isActive ? signInButton() : logoutButton()

    return (
      <Menu fixed='top' borderless pointing>
        <Container>
          <Menu.Item header as={Link} to='/'
            onClick={() => selectItem(null)}>
            <Icon name='tasks' />
            MNMLTASKR
          </Menu.Item>
          <Menu.Item as={Link} to='/post-a-task' name='post a task'
            active={activeItem === 'post a task'}
            onClick={(e, {name}) => selectItem(name)}
          />
          <Menu.Item as={Link} to='/browse-tasks' name='browse tasks'
            active={activeItem === 'browse tasks'}
            onClick={(e, {name}) => selectItem(name)}
          />
          <Menu.Item as={Link} to='/my-tasks' name='my tasks'
            active={activeItem === 'my tasks'}
            onClick={(e, {name}) => selectItem(name)}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              {whichButton}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
