import React from 'react'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'

const LoggedInView = () => {
  swal(
    'What, friend?',
    'Cannot access! You are logged in already...',
    'error'
  )

  return (
    <Redirect to='/' />
  )
}

export default LoggedInView
