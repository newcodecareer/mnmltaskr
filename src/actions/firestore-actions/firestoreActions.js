import { auth, db } from '../../firebase'
import swal from 'sweetalert'

export const postTask = async (values) => {
  const uid = auth.currentUser.uid
  const {
    title,
    description,
    type,
    location,
    due,
    numberOfTaskers,
    budget
  } = values

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
    swal(
      'Success!',
      'You have posted a task...',
      'success'
    )
  }
}
