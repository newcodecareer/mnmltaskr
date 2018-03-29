import { reduxForm } from 'redux-form'
import Location from '../components/wizard-style-form/form-contents/Location'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Location)
