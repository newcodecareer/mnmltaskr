import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button, Icon, Dropdown } from 'semantic-ui-react'
import { logout, getUser } from '../actions/firestore-actions/authUser'

const renderSignin = () => (
  <Button
    as='a' href='/login'
    circular animated
  >
    <Button.Content visible>
      Login
    </Button.Content>
    <Button.Content hidden>
      <Icon color='black' name='sign in' />
    </Button.Content>
  </Button>
)

const renderLogout = (toggleSidebar) => {
  const trigger = (
    <div>
      <Icon name='user circle outline' size='large' />
    </div>
  )

  const options = [
    {
      key: 'todo',
      text: <span>Hi, <b>{getUser().firstName}</b>!</span>,
      disabled: true
    },
    {
      key: 'user',
      text: 'My account',
      icon: 'user',
      onClick: toggleSidebar
    },
    {
      key: 'sign-out',
      text: 'Logout',
      icon: 'sign out',
      onClick: logout
    }
  ]

  return (
    <Dropdown
      floating
      trigger={trigger}
      options={options}
      pointing='top right'
      icon={null}
    />
  )
}

const items = [
  { link: '/post-a-task', name: 'post a task' },
  { link: '/browse-tasks', name: 'browse tasks' },
  { link: '/my-tasks', name: 'my tasks' }
]

export default class Header extends Component {
  render () {
    const {
      activeItem,
      selectItem,
      isActive,
      toggleSidebar
    } = this.props

    const whichComponent =
      isActive ? renderLogout(toggleSidebar)
        : renderSignin()

    return (
      <Menu fixed='top' borderless pointing>
        <Container>
          <Menu.Item header as={Link} to='/'
            onClick={() => selectItem(null)}>
            <Icon name='tasks' />
            MNMLTASKR
          </Menu.Item>
          {
            items.map((item) => (
              <Menu.Item key={item.name} as={Link}
                to={item.link} name={item.name}
                active={activeItem === item.name}
                onClick={(e, {name}) => selectItem(name)}
              />
            ))
          }
          <Menu.Menu position='right'>
            <Menu.Item>
              {whichComponent}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
