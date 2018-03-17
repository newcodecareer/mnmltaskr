import { connect } from 'react-redux'
import Header from  '../components/Header'
import selectItem from '../actions/itemsActions'

const mapStateToProps = (state) => {
  return { activeItem: state.items.activeItem }
}

const mapDispatchToProps = (dispatch) => ({
  selectItem : (itemName) => { dispatch(selectItem(itemName)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
