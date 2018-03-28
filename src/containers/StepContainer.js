import { connect } from 'react-redux'
import StepContent from  '../components/wizard-style-form/StepContent'

const mapStateToProps = (state) => {
  return { page: state.wizard.page }
}

export default connect(mapStateToProps)(StepContent)
