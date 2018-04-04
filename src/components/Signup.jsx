import React from 'react'

import FormWrapper from './auth-forms/FormWrapper'
import SignupFormContainer from '../containers/SignupFormContainer'
import { signupUser } from '../actions/firestore/authUser'

const Signup = () => (
  <FormWrapper message={
    <div>
      Sign up to <i>mnmltaskr</i>!
    </div>
  }>
    <SignupFormContainer onSubmit={signupUser} />
  </FormWrapper>
)

export default Signup
