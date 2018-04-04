import { db } from '../../firebase'
import swal from 'sweetalert'
import store from '../../store'
import { reset } from 'redux-form'
import { getUser } from './authUser'

const postTask = async (values) => {
  const uid = getUser().uid
  let {
    title,
    description,
    type,
    location,
    due,
    numberOfTaskers,
    budget
  } = values

  if (type === 'Online') {
    location = 'Remote'
  }

  const posted = await db.collection('tasks').add({
    title,
    description,
    type,
    location,
    due,
    numberOfTaskers,
    budget,
    availability: true,
    owner: `/users/${uid}`,
    bidders: [],
    approved: []
  })

  if (posted) {
    store.dispatch(reset('wizard'))
    swal(
      'Success!',
      'You have posted a task...',
      'success'
    )
  }
}

export default postTask
