import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute ({ component: Component, ...rest }) {
  const user = localStorage.getItem('user')

  return (
    <Route {...rest} render={(props) => (
      user ? <Component {...props} />
        : <Redirect to='/not-logged-in' />
    )} />
  )
}
