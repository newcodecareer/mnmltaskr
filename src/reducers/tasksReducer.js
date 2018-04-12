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
    } case 'ASSIGNED_TASKS': {
      return {
        ...state,
        assignedTasks: action.payload
      }
    } case 'OPEN_TASKS': {
      return {
        ...state,
        openTasks: action.payload
      }
    } case 'PENDING_TASKS': {
      return {
        ...state,
        pendingTasks: action.payload
      }
    } case 'ONGOING_TASKS': {
      return {
        ...state,
        ongoingTasks: action.payload
      }
    } case 'COMPLETED_TASKS': {
      return {
        ...state,
        completedTasks: action.payload
      }
    } case 'TASKS_TO_BE_ASSIGNED': {
      return {
        ...state,
        tasksToBeAssigned: action.payload
      }
    }
  }
  return state
}

export default tasksReducer
