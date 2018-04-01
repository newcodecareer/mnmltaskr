import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { toggleSidebar } from '../actions/menuActions'

const mapStateToProps = (state) => ({
  visible: state.menu.visible
})

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: () => { dispatch(toggleSidebar()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
