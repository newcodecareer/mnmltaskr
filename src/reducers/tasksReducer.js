export default function tasksReducer (state={}, action) {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED': {
      return {
        ...state, 
        tasks: action.payload
      }
      break;
    }
    case 'FETCH_POSTED_FULFILLED': {
      return {
        ...state,
        postedTasks: action.payload
      }
      break;
    }
  }
  return state
}