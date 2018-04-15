import { db } from '../firebase'
import { getUser } from './firestore/authUser'

const fetchTasks = () => {
  return async (dispatch) => {
    const { uid } = getUser()
    const taskList = []
    let tasks = await db.collection('tasks')
      .where('owner', '>', uid)
      .get()

    tasks.forEach((task) => {
      const id = task.id
      taskList.push({...task.data(), id})
    })

    tasks = await db.collection('tasks')
      .where('owner', '<', uid)
      .get()

    tasks.forEach((task) => {
      const id = task.id
      taskList.push({...task.data(), id})
    })

    dispatch({
      type: 'FETCH_TASKS_FULFILLED',
      payload: taskList
    })
  }
}

const fetchPostedTasks = () => {
  return async (dispatch) => {
    const { uid } = getUser()
    const postedTasks = await db.collection('tasks')
      .where('owner', '==', uid)
      .get()

    const postedList = []
    postedTasks.forEach((posted) => {
      const id = posted.id
      postedList.push({...posted.data(), id})
    })

    dispatch({
      type: 'FETCH_POSTED_FULFILLED',
      payload: postedList
    })
  }
}

const fetchTaskBids = (taskId) => {
  return async (dispatch) => {
    const bids = await db.collection('bids')
      .where('taskId', '==', taskId)
      .get()

    const bidsList = []
    bids.forEach((bid) => {
      const bidId = bid.id
      bidsList.push({ ...bid.data(), bidId })
    })

    dispatch({
      type: 'FETCH_BIDS',
      payload: bidsList
    })
  }
}

const fetchBiddedTasks = () => {
  return async (dispatch) => {
    const { uid } = getUser()
    const bids = await db.collection('bids')
      .where('owner', '==', uid)
      .get()

    const taskIds = []
    bids.forEach(bid => {
      const taskId = bid.get('taskId')
      taskIds.push(taskId)
    })

    const stringiedBiddedTasks = new Set()
    for (const taskId of taskIds) {
      const task = await db.collection('tasks')
        .doc(taskId)
        .get()

      stringiedBiddedTasks.add(JSON.stringify({
        ...task.data(), id: taskId
      }))
    }

    const jsonedBiddedTasks = []
    stringiedBiddedTasks.forEach(bidded =>
      jsonedBiddedTasks.push(JSON.parse(bidded))
    )

    dispatch({
      type: 'BIDDED_TASKS',
      payload: jsonedBiddedTasks
    })
  }
}

const fetchTasksByAvailability = (open) => {
  return async (dispatch) => {
    const { uid } = getUser()
    const tasks = await db.collection('tasks')
      .where('owner', '==', uid)
      .where('open', '==', open)
      .get()

    const tasksList = []
    tasks.forEach(task => {
      const id = task.id
      tasksList.push({ ...task.data(), id })
    })

    const type = open
      ? 'OPEN_TASKS' : 'ASSIGNED_TASKS'

    dispatch({
      type: type,
      payload: tasksList
    })
  }
}

const fetchTransactions = (status) => {
  return async (dispatch) => {
    const { uid } = getUser()
    const trans = await db.collection('transactions')
      .where('status', '==', status)
      .get()

    const taskIds = []
    trans.forEach((tran) => {
      const single = tran.data()
      const { approved } = single

      const aprub = approved.filter(a =>
        a.taskerId === uid
      )

      if (aprub.length > 0) {
        taskIds.push(single.taskId)
      }
    })

    const tasks = []
    for (const taskId of taskIds) {
      const task = await db.collection('tasks')
        .doc(taskId)
        .get()

      tasks.push({
        ...task.data(),
        id: taskId,
        status
      })
    }

    dispatch({
      type: `${status.toUpperCase()}_TASKS`,
      payload: tasks
    })
  }
}

const fetchTasksToBeAssigned = () => {
  return async (dispatch) => {
    const { uid } = getUser()
    const bids = await db.collection('bids').get()
    const myTasks = await db.collection('tasks')
      .where('owner', '==', uid)
      .where('open', '==', true)
      .get()

    const stringiedTasks = new Set()
    bids.forEach(bid => {
      myTasks.forEach(task => {
        const id = task.id
        if (id === bid.get('taskId')) {
          stringiedTasks.add(JSON.stringify({
            ...task.data(), id
          }))
        }
      })
    })

    const jsonedTasks = []
    stringiedTasks.forEach(task =>
      jsonedTasks.push(JSON.parse(task))
    )

    dispatch({
      type: 'TASKS_TO_BE_ASSIGNED',
      payload: jsonedTasks
    })
  }
}

const setFilterUrl = (url) => {
  return (dispatch) => {
    dispatch({
      type: 'TASK_FILTER_URL',
      payload: url
    })
  }
}

const fetchSingleTaskReceipt = (taskId) => {
  return async (dispatch) => {
    const usersRef = db.collection('users')
    const receipt = await db.collection('transactions')
      .doc(taskId)
      .get()

    const names = []
    const approvedList = receipt.get('approved')
    for (const tasker of approvedList) {
      const approvedRef = await usersRef.doc(tasker.taskerId).get()
      const first = approvedRef.get('firstName')
      const last = approvedRef.get('lastName')

      names.push(`${first} ${last}`)
    }

    const taskee = receipt.get('owner')
    const taskeeRef = await usersRef.doc(taskee).get()
    const first = taskeeRef.get('firstName')
    const last = taskeeRef.get('lastName')
    const taskeeName = `${first} ${last}`

    dispatch({
      type: 'TASK_RECEIPT',
      payload: {...receipt.data(), taskeeName, names}
    })
  }
}

export {
  fetchTasks,
  fetchPostedTasks,
  fetchTaskBids,
  fetchBiddedTasks,
  fetchTasksByAvailability,
  fetchTransactions,
  fetchTasksToBeAssigned,
  setFilterUrl,
  fetchSingleTaskReceipt
}
