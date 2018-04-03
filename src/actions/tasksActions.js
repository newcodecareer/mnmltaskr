import { db } from '../firebase'
import { getUser } from './firestore-actions/authUser'

export default function fetchTasks () {
  return async (dispatch) => {
    const uid = getUser().uid
    const taskList = []
    let tasks = await db.collection('tasks')
      .where('owner', '>', `/users/${uid}`)
      .get()

    tasks.forEach((task) => {
      taskList.push(task.data())
    })

    tasks = await db.collection('tasks')
      .where('owner', '<', `/users/${uid}`)
      .get()

    tasks.forEach((task) => {
      taskList.push(task.data())
    })

    dispatch({
      type: 'FETCH_TASKS_FULFILLED',
      payload: taskList
    })
  }
}

export function fetchPostedTasks () {
  return async (dispatch) => {
    const uid = getUser().uid
    const postedTasks = await db.collection('tasks')
      .where('owner', '==', `/users/${uid}`)
      .get()

    const postedList = []
    postedTasks.forEach((posted) => {
      postedList.push(posted.data())
    })

    dispatch({
      type: 'FETCH_POSTED_FULFILLED',
      payload: postedList
    })
  }
}
