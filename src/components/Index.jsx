import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch } from 'react-router-dom'
import { authUser } from './authUser'
import { signupAccount } from './dbActions'

import FormWrapper from './FormWrapper'
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

export default class Index extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={loginComponent} />
        <Route path='/signup' component={signupComponent} />
        <Route path='/' component={mainComponent} />
      </Switch>
    )
  }
}
  