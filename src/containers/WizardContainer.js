import { connect } from 'react-redux'
import TaskForm from '../components/wizard-style-form/TaskForm'
import { goToNext, goToPrev } from '../actions/wizardActions'

const mapStateToProps = (state) => {
  return { page: state.wizard.page }
}

const mapDispatchToProps = (dispatch) => ({
  goToPrev: () => { dispatch(goToPrev()) },
  goToNext: () => { dispatch(goToNext()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
