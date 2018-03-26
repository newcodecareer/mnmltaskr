import React from 'react'
import { reduxForm } from 'redux-form'
import SignupForm from '../components/SignupForm'

export default reduxForm({ form: 'signupForm' })(SignupForm)