import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './custom/PrivateRoute'
import LoggedInView from './LoggedInView'
import NotLoggedInView from './NotLoggedInView'

import Main from './Main'
import Login from './Login'
import Signup from './Signup'

const Index = (props) => (
  <Switch>
    <PrivateRoute path='/login' component={Login} />
    <PrivateRoute path='/signup' component={Signup} />
    <Route path='/logged-in' component={LoggedInView} />
    <Route path='/not-logged-in' component={NotLoggedInView} />
    <Route path='/' component={Main} />
  </Switch>
)

export default Index
