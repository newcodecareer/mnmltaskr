import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from '../firebase'


export default function PrivateRoute({ component: Component, ...rest }) {
  const email = auth.currentUser ? auth.currentUser.email : null; 

  return (
    <Route {...rest} render={(props) => (
      email ? <Component {...props} />
      : <Redirect to='/not-logged-in' />
    )} />
  )
}
