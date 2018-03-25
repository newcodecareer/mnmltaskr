import React from 'react'
import { reduxForm } from 'redux-form'
import Details from '../components/form-contents/Details'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Details);