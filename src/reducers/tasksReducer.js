const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED': {
      return {
        ...state,
        tasks: action.payload
      }
    }
    case 'FETCH_POSTED_FULFILLED': {
      return {
        ...state,
        postedTasks: action.payload
      }
    }
    case 'FETCH_BIDS': {
      return {
        ...state,
        bids: action.payload
      }
    }
  }
  return state
}

export default tasksReducer
