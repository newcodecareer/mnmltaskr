import { connect } from 'react-redux'
import MyTasks from  '../components/MyTasks'
import { fetchPostedTasks } from '../actions/tasksActions'

const mapStateToProps = (state) => {
  return { postedTasks: state.tasks.postedTasks }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostedTasks : () => { dispatch(fetchPostedTasks()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks)
