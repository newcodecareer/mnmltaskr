import { connect } from 'react-redux'
import MyTasks from '../components/menu/MyTasks'
import {
  fetchPostedTasks,
  fetchBiddedTasks,
  fetchTasksByAvailability,
  fetchTransactions,
  fetchTasksToBeAssigned,
  setFilterUrl
} from '../actions/tasksActions'

const mapStateToProps = (state) => ({
  postedTasks: state.tasks.postedTasks,
  biddedTasks: state.tasks.biddedTasks,
  assignedTasks: state.tasks.assignedTasks,
  openTasks: state.tasks.openTasks,
  pendingTasks: state.tasks.pendingTasks,
  ongoingTasks: state.tasks.ongoingTasks,
  completedTasks: state.tasks.completedTasks,
  tasksToBeAssigned: state.tasks.tasksToBeAssigned,
  filterUrl: state.tasks.filterUrl
})

const mapDispatchToProps = (dispatch) => ({
  fetchPostedTasks: () => { dispatch(fetchPostedTasks()) },
  fetchBiddedTasks: () => { dispatch(fetchBiddedTasks()) },
  fetchTasksByAvailability: (open) => { dispatch(fetchTasksByAvailability(open)) },
  fetchTasksToBeAssigned: () => { dispatch(fetchTasksToBeAssigned()) },
  fetchTransactions: (status) => { dispatch(fetchTransactions(status)) },
  setFilterUrl: (url) => { dispatch(setFilterUrl(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks)
