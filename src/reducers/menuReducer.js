const itemsReducer = (state = {
  visible: false
}, action) => {
  switch (action.type) {
    case 'SELECT_ITEM': {
      return {
        ...state,
        activeItem: action.payload
      }
    }
    case 'TOGGLE_SIDEBAR': {
      return {
        ...state,
        visible: !state.visible
      }
    }
  }
  return state
}

export default itemsReducer
