export default function tasksReducer (state={}, action) {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED': {
      return {
        ...state, 
        tasks: action.payload
      }
      break;
    }
  }
  return state
}