import { reduxForm } from 'redux-form'
import Details from '../components/wizard-form/contents/Details'
export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Details)
