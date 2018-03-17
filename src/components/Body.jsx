import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react';
import PostATask from './PostATask'
import BrowseTasks from './BrowseTasks'
import MyTasks from './MyTasks'

export default class Body extends React.Component {
  render() {
    return (
      <Container>
        <Segment style={{ padding: '5em 0em 0em 0em' }} vertical>
          <Switch>
            <Route path='/post-a-task' component={PostATask} />
            <Route path='/browse-tasks' component={BrowseTasks} />
            <Route path='/my-tasks' component={MyTasks} />
          </Switch>
        </Segment>
      </Container>
    )
  }
}
