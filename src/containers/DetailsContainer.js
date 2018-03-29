import { reduxForm } from 'redux-form'
import Details from '../components/wizard-style-form/form-contents/Details'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Details)
