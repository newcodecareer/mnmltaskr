import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react'
import PrivateRoute from './custom/PrivateRoute'

import Home from './Home'
import PostATask from './menubar/PostATask'
import TasksContainer from '../containers/TasksContainer'
import PostedTasksContainer from '../containers/PostedTasksContainer'

const Body = (props) => (
  <Container>
    <Segment style={{ padding: '6em 0em 4em 0em' }} vertical>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/post-a-task' component={PostATask} />
        <PrivateRoute path='/browse-tasks' component={TasksContainer} />
        <PrivateRoute path='/my-tasks' component={PostedTasksContainer} />
      </Switch>
    </Segment>
  </Container>
)

export default Body
