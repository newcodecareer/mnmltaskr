import db from '../firebase'

export default function fetchTasks () {
  return async (dispatch) => {
    const tasks = await db.collection('tasks').get()
    const taskList = []
    tasks.forEach((task) => {
      taskList.push(task.data())
    })

    dispatch({ 
      type: "FETCH_TASKS_FULFILLED", 
      payload: taskList
    })
  }
}

export function fetchPostedTasks () {
  return async (dispatch) => {
    const postedTasks = await db.collection('postedTasks').get()
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