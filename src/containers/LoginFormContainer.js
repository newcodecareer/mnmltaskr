import React from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from '../components/auth-forms/LoginForm'

export default reduxForm({ form: 'loginForm' })(LoginForm)