export default function itemsReducer (state = {}, action) {
  switch (action.type) {
    case 'SELECT_ITEM': {
      return {
        ...state,
        activeItem: action.payload
      }
    }
  }
  return state
}
