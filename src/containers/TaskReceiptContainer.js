import { connect } from 'react-redux'
import TaskReceipt from '../components/TaskReceipt'
import { fetchSingleTaskReceipt } from '../actions/tasksActions'

const mapStateToProps = (state) => ({
  taskReceipt: state.tasks.taskReceipt
})

const mapDispatchToProps = (dispatch) => ({
  fetchSingleTaskReceipt: (taskId) => { dispatch(fetchSingleTaskReceipt(taskId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskReceipt)
