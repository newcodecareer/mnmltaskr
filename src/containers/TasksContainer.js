import { connect } from 'react-redux'
import BrowseTasks from  '../components/BrowseTasks'
import fetchTasks from '../actions/tasksActions'

const mapStateToProps = (state) => {
  return { tasks: state.tasks.tasks }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTasks : () => { dispatch(fetchTasks()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(BrowseTasks)
