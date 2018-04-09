import { db } from '../firebase'
import { getUser } from './firestore/authUser'

let postedList = []

const fetchTasks = () => {
  return async (dispatch) => {
    const uid = getUser().uid
    const taskList = []
    let tasks = await db.collection('tasks')
      .where('owner', '>', `/users/${uid}`)
      .get()

    tasks.forEach((task) => {
      const id = task.id
      taskList.push({...task.data(), id})
    })

    tasks = await db.collection('tasks')
      .where('owner', '<', `/users/${uid}`)
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
      .where('owner', '==', `/users/${uid}`)
      .get()

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

const fetchUserBids = (id) => {
  let bidders = []
  postedList.forEach((task) => {
    if (id === task.id) {
      bidders = task.bidders
    }
  })

  return bidders
}

export {
  fetchTasks,
  fetchPostedTasks,
  fetchUserBids
}
