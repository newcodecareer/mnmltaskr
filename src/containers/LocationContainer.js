import React from 'react'
import { reduxForm } from 'redux-form'
import Location from '../components/form-contents/Location'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Location);