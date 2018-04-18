import tasksReducer from '../../reducers/tasksReducer'

const tasks = [
  { title: 'Get my clothes' },
  { title: 'Get my pizza' }
]

describe('tasks reducer', () => {
  it('should return the initial state', () => {
    expect(tasksReducer(undefined, {})).toEqual({
      filterUrl: '/posted'
    })
  })

  it('should handle FETCH_TASKS_FULFILLED', () => {
    expect(tasksReducer({}, {
      type: 'FETCH_TASKS_FULFILLED',
      payload: tasks
    })).toEqual({
      tasks: tasks
    })
  })

  it('should handle FETCH_POSTED_FULFILLED', () => {
    expect(tasksReducer({}, {
      type: 'FETCH_POSTED_FULFILLED',
      payload: tasks
    })).toEqual({
      postedTasks: tasks
    })
  })

  it('should handle FETCH_BIDS', () => {
    expect(tasksReducer({}, {
      type: 'FETCH_BIDS',
      payload: tasks
    })).toEqual({
      bids: tasks
    })
  })

  it('should handle BIDDED_TASKS', () => {
    expect(tasksReducer({}, {
      type: 'BIDDED_TASKS',
      payload: tasks
    })).toEqual({
      biddedTasks: tasks
    })
  })

  it('should handle TASK_FILTER_URL', () => {
    expect(tasksReducer({}, {
      type: 'TASK_FILTER_URL',
      payload: tasks
    })).toEqual({
      filterUrl: tasks
    })
  })

  it('should handle ASSIGNED_TASKS', () => {
    expect(tasksReducer({}, {
      type: 'ASSIGNED_TASKS',
      payload: tasks
    })).toEqual({
      assignedTasks: tasks
    })
  })

  it('should handle OPEN_TASKS', () => {
    expect(tasksReducer({}, {
      type: 'OPEN_TASKS',
      payload: tasks
    })).toEqual({
      openTasks: tasks
    })
  })

  it('should handle PENDING_TASKS', () => {
    expect(tasksReducer({}, {
      type: 'PENDING_TASKS',
      payload: tasks
    })).toEqual({
      pendingTasks: tasks
    })
  })

  it('should handle ONGOING_TASKS', () => {
    expect(tasksReducer({}, {
      type: 'ONGOING_TASKS',
      payload: tasks
    })).toEqual({
      ongoingTasks: tasks
    })
  })

  it('should handle COMPLETED_TASKS', () => {
    expect(tasksReducer({}, {
      type: 'COMPLETED_TASKS',
      payload: tasks
    })).toEqual({
      completedTasks: tasks
    })
  })

  it('should handle TASKS_TO_BE_ASSIGNED', () => {
    expect(tasksReducer({}, {
      type: 'TASKS_TO_BE_ASSIGNED',
      payload: tasks
    })).toEqual({
      tasksToBeAssigned: tasks
    })
  })

  it('should handle TASK_RECEIPT', () => {
    expect(tasksReducer({}, {
      type: 'TASK_RECEIPT',
      payload: { totalPayment: 100 }
    })).toEqual({
      taskReceipt: { totalPayment: 100 }
    })
  })
})
