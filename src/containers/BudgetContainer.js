import { reduxForm } from 'redux-form'
import Budget from '../components/wizard-form/contents/Budget'

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Budget)
