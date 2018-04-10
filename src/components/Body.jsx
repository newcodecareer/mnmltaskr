import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './custom/PrivateRoute'

import Home from './Home'
import PostATask from './menubar/PostATask'
import TasksContainer from '../containers/TasksContainer'
import PostedTasksContainer from '../containers/PostedTasksContainer'

const Body = (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <PrivateRoute path='/post-a-task' component={PostATask} />
    <PrivateRoute path='/browse-tasks' component={TasksContainer} />
    <PrivateRoute path='/my-tasks' component={PostedTasksContainer} />
  </Switch>
)

export default Body
