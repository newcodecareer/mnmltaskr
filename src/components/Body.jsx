import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react';

import Home from './Home'
import PostATask from './PostATask'
import BrowseTasks from './BrowseTasks'
import TasksContainer from '../containers/TasksContainer'
import MyTasks from './MyTasks'

export default class Body extends React.Component {
  render() {
    return (
      <Container>
        <Segment style={{ padding: '5em 0em 0em 0em' }} vertical>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post-a-task' component={PostATask} />
            <Route path='/browse-tasks' component={TasksContainer} />
            <Route path='/my-tasks' component={MyTasks} />
          </Switch>
        </Segment>
      </Container>
    )
  }
}
