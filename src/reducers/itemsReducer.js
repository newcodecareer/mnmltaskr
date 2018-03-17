export default function itemsReducer (
  state={ activeItem: 'post a task' }, action) {

  switch (action.type) {
    case "SELECT_ITEM": {
      return {
        ...state, 
        activeItem: action.payload
      }
      break;
    }
  }
  return state
}