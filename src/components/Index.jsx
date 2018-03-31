import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './custom/PrivateRoute'
import { LoggedInView } from './LoggedInView'

import { authUser } from '../actions/firestore-actions/authUser'
import { signupAccount } from '../actions/firestore-actions/dbActions'

import FormWrapper from './auth-forms/FormWrapper'
import LoginFormContainer from '../containers/LoginFormContainer'
import SignupFormContainer from '../containers/SignupFormContainer'

import ItemsContainer from '../containers/ItemsContainer'
import Body from './Body'

const loginComponent = () => (
  <FormWrapper message={
    <div>
      Login to your <i>mnmltaskr</i> account
    </div>
  }>
    <LoginFormContainer onSubmit={authUser} />
  </FormWrapper>
)

const signupComponent = () => (
  <FormWrapper message={
    <div>
      Sign up to <i>mnmltaskr</i>!
    </div>
  }>
    <SignupFormContainer onSubmit={signupAccount} />
  </FormWrapper>
)

const mainComponent = () => (
  <div>
    <ItemsContainer />
    <Body />
  </div>
)

export default class Index extends Component {
  render () {
    return (
      <Switch>
        <PrivateRoute path='/login' component={loginComponent} />
        <PrivateRoute path='/signup' component={signupComponent} />
        <Route path='/logged-in' component={LoggedInView} />
        <Route path='/' component={mainComponent} />
      </Switch>
    )
  }
}
