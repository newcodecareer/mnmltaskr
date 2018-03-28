import React from 'react'
import { reduxForm } from 'redux-form'
import Location from '../components/wizard-style-form/form-contents/Location.jsx'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Location);