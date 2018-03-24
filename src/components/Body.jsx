import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react';

import Home from './Home'
import PostATask from './PostATask'
import TasksContainer from '../containers/TasksContainer'
import PostedTasksContainer from '../containers/PostedTasksContainer'
import PrivateRoute from './PrivateRoute'
import NotLoggedInView from './NotLoggedInView'

export default class Body extends React.Component {
  render() {
    return (
      <Container>
        <Segment style={{ padding: '6em 0em 0em 0em' }} vertical>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/not-logged-in' component={NotLoggedInView} />
            <PrivateRoute path='/post-a-task' component={PostATask} />
            <PrivateRoute path='/browse-tasks' component={TasksContainer} />
            <PrivateRoute path='/my-tasks' component={PostedTasksContainer} />
          </Switch>
        </Segment>
      </Container>
    )
  }
}
