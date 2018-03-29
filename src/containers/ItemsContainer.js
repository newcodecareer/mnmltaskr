import { connect } from 'react-redux'
import Header from '../components/Header'
import selectItem from '../actions/itemsActions'

const mapStateToProps = (state) => ({
  activeItem: state.items.activeItem,
  isActive: state.status.isActive
})

const mapDispatchToProps = (dispatch) => ({
  selectItem: (itemName) => { dispatch(selectItem(itemName)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
