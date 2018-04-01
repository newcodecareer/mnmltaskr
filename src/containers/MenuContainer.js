import { connect } from 'react-redux'
import Header from '../components/Header'
import selectItem, { toggleSidebar } from '../actions/menuActions'

const mapStateToProps = (state) => ({
  activeItem: state.menu.activeItem,
  isActive: state.user.isActive
})

const mapDispatchToProps = (dispatch) => ({
  selectItem: (itemName) => { dispatch(selectItem(itemName)) },
  toggleSidebar: () => { dispatch(toggleSidebar()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
