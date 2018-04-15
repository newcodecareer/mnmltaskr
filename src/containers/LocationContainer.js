import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import Location from '../components/wizard-form/contents/Location'
import { isAddress } from '../components/custom/Validator'

const validate = (values) => {
  const errors = {}

  if (!values.type) {
    errors.type = 'You must choose a type!'
  }

  if (!isAddress(values.location)) {
    errors.location = 'Please specify a location!'
  }

  if (!values.due) {
    errors.due = 'Please specify the due date!'
  }

  return errors
}

const decoratedLocation = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Location)

const selector = formValueSelector('wizard')
export default connect((state) => {
  const type = selector(state, 'type')
  return { type }
})(decoratedLocation)
