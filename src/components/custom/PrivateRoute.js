import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute ({ component: Component, ...rest }) {
  const user = localStorage.getItem('user')
  const view = <Component />
  const name = view.type.displayName
  const isAuthView =
    name === 'loginComponent' ||
    name === 'signupComponent'

  let component = (props) => (
    user ? <Component {...props} />
      : <Redirect to='/not-logged-in' />
  )

  if (isAuthView) {
    component = (props) => (
      user ? <Redirect to='/logged-in' />
        : <Component {...props} />
    )
  }

  return (
    <Route {...rest} render={component} />
  )
}
