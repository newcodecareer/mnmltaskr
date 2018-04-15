import { reduxForm } from 'redux-form'
import Details from '../components/wizard-form/contents/Details'
import { isTitle, isDesc } from '../components/custom/Validator'

const validate = (values) => {
  const errors = {}

  if (!isTitle(values.title)) {
    errors.title = 'Hit the sweet spot! Please use between 10 and 50 characters'
  }

  if (!isDesc(values.desc)) {
    errors.desc = 'Tell us more! Please enter at least 25 characters'
  }

  return errors
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Details)
