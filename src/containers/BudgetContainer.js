import { reduxForm } from 'redux-form'
import Budget from '../components/wizard-form/contents/Budget'
import { isManpower, isValidBudget } from '../components/custom/Validator'

const validate = (values) => {
  const errors = {}

  if (!isManpower(values.manpower)) {
    errors.manpower = 'Man power must be less than or equal to 20!'
  }

  if (!isValidBudget(values.budget)) {
    errors.budget = 'Please specify a correct budget!'
  }

  return errors
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Budget)
