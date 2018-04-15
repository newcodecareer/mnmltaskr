import React from 'react'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'

const NotLoggedInView = () => {
  swal(
    'Sorry, friend!',
    'You need to login first to continue...',
    'error'
  )

  return (<Redirect to='/' />)
}

export default NotLoggedInView
