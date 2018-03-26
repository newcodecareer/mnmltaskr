import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'

import LoginView from './LoginView'
import SignupView from './SignupView'
import ItemsContainer from '../containers/ItemsContainer'
import Body from './Body'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Route path='/login' component={LoginView} />
        <Route path='/signup' component={SignupView} />
        <ItemsContainer />
        <Body />
      </div>
    )
  }
}
  