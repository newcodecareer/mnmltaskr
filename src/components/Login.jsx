import React from 'react'

import FormWrapper from './auth-forms/FormWrapper'
import LoginFormContainer from '../containers/LoginFormContainer'
import { signinUser } from '../actions/firestore/authUser'

const Login = () => (
  <FormWrapper message={
    <div>
      Login to your <i>mnmltaskr</i> account
    </div>
  }>
    <LoginFormContainer onSubmit={signinUser} />
  </FormWrapper>
)

export default Login
