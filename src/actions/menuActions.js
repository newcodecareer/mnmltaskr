const selectItem = (itemName) => {
  return (dispatch) => {
    dispatch({
      type: 'SELECT_ITEM',
      payload: itemName
    })
  }
}

const toggleSidebar = () => {
  return (dispatch) => {
    dispatch({
      type: 'TOGGLE_SIDEBAR'
    })
  }
}

export {
  selectItem,
  toggleSidebar
}
