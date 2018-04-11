import { connect } from 'react-redux'
import MyTasks from '../components/menu/MyTasks'
import {
  fetchPostedTasks,
  fetchBiddedTasks,
  setFilterUrl
} from '../actions/tasksActions'

const mapStateToProps = (state) => ({
  postedTasks: state.tasks.postedTasks,
  biddedTasks: state.tasks.biddedTasks,
  filterUrl: state.tasks.filterUrl
})

const mapDispatchToProps = (dispatch) => ({
  fetchPostedTasks: () => { dispatch(fetchPostedTasks()) },
  fetchBiddedTasks: () => { dispatch(fetchBiddedTasks()) },
  setFilterUrl: (url) => { dispatch(setFilterUrl(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks)
