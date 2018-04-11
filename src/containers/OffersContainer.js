import { connect } from 'react-redux'
import Offers from '../components/Offers'
import { fetchTaskBids } from '../actions/tasksActions'

const mapStateToProps = (state) => ({
  bids: state.tasks.bids
})

const mapDispatchToProps = (dispatch) => ({
  fetchTaskBids: (taskId) => { dispatch(fetchTaskBids(taskId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Offers)
