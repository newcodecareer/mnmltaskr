import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu, Container, Button, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    const { activeItem, selectItem } = this.props

    return (
      <Menu fixed='top' borderless pointing>
        <Container >
          <Menu.Item header>
            <Icon name='tasks' />
            MNMLTRACKR
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
              <Button basic animated>
                <Button.Content visible>
                  Logout
                </Button.Content>
                <Button.Content hidden>
                  <Icon color='black' name='sign out' />
                </Button.Content>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
