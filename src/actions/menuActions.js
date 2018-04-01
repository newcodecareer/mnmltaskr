export default function selectItem (itemName) {
  return function (dispatch) {
    dispatch({
      type: 'SELECT_ITEM',
      payload: itemName
    })
  }
}

export const toggleSidebar = () => {
  return (dispatch) => {
    dispatch({
      type: 'TOGGLE_SIDEBAR'
    })
  }
}
