import { reduxForm } from 'redux-form'
import SignupForm from '../components/auth-forms/SignupForm'
import {
  isName,
  isEmail,
  isPassword,
  isPhoneNumber,
  isAddress
} from '../components/custom/Validator'

const validate = (values) => {
  const errors = {}

  if (!isName(values.first)) {
    errors.first = 'Invalid first name!'
  }

  if (!isName(values.last)) {
    errors.last = 'Invalid last name!'
  }

  if (!isEmail(values.email)) {
    errors.email = 'Invalid email!'
  }

  if (!isPassword(values.password)) {
    errors.password = 'Must be at least 8 characters!'
  }

  if (!isPhoneNumber(values.phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number!'
  }

  if (!isAddress(values.address)) {
    errors.address = 'Invalid address!'
  }

  return errors
}

export default reduxForm({
  form: 'signupForm',
  validate
})(SignupForm)
