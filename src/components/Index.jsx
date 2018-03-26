import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Route } from 'react-router-dom'
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

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Route path='/login' component={loginComponent} />
        <Route path='/signup' render={signupComponent} />
        <ItemsContainer />
        <Body />
      </div>
    )
  }
}
  