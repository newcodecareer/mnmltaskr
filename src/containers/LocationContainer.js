import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import Location from '../components/wizard-form/contents/Location'

const decoratedLocation = reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Location)

const selector = formValueSelector('wizard')
export default connect((state) => {
  const type = selector(state, 'type')
  return { type }
})(decoratedLocation)
