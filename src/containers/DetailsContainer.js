import React from 'react'
import { reduxForm } from 'redux-form'
import Details from '../components/wizard-style-form/form-contents/Details.jsx'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Details);