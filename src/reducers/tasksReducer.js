const tasksReducer = (state = { filterUrl: '/' }, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED': {
      return {
        ...state,
        tasks: action.payload
      }
    } case 'FETCH_POSTED_FULFILLED': {
      return {
        ...state,
        postedTasks: action.payload
      }
    } case 'FETCH_BIDS': {
      return {
        ...state,
        bids: action.payload
      }
    } case 'BIDDED_TASKS': {
      return {
        ...state,
        biddedTasks: action.payload
      }
    } case 'TASK_FILTER_URL': {
      return {
        ...state,
        filterUrl: action.payload
      }
    }
  }
  return state
}

export default tasksReducer
