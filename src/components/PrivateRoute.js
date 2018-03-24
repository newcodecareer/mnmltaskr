import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      localStorage.getItem('user') === true
        ? <Component {...props} />
        : <Redirect to='/not-logged-in' />
    )} />
  )
}