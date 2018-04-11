import { db } from '../firebase'
import { getUser } from './firestore/authUser'

const fetchTasks = () => {
  return async (dispatch) => {
    const uid = getUser().uid
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
    const uid = getUser().uid
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
    const uid = getUser().uid
    const bids = await db.collection('bids')
      .where('owner', '==', uid)
      .get()

    const taskIds = []
    bids.forEach(bid => {
      const taskId = bid.get('taskId')
      taskIds.push(taskId)
    })

    const biddedTasks = []
    taskIds.forEach(async (taskId) => {
      const task = await db.collection('tasks')
        .doc(taskId)
        .get()

      biddedTasks.push(task.data())
    })

    dispatch({
      type: 'BIDDED_TASKS',
      payload: biddedTasks
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

export {
  fetchTasks,
  fetchPostedTasks,
  fetchTaskBids,
  fetchBiddedTasks,
  setFilterUrl
}
