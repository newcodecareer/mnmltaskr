import { db } from '../../firebase'
import swal from 'sweetalert'
import store from '../../store'
import { reset } from 'redux-form'
import { getUser } from './authUser'
import history from '../../history'

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

const makeAnOffer = async ({ id, offer, reason }) => {
  let transaction
  try {
    const taskRef = db.collection('tasks').doc(id)
    transaction = await db
      .runTransaction(async t => {
        const doc = await t.get(taskRef)
        const bidders = doc.get('bidders')
        const uid = getUser().uid

        bidders.push({ uid, offer, reason })
        t.update(taskRef, { bidders })

        return { result: 'sucess' }
      })
  } catch (e) {
    transaction = e
  }

  if (transaction.result) {
    swal('Offer made!',
      'You can now wait for the approval...',
      'success'
    )
    history.push('/browse-tasks')
  }
}

export { postTask, makeAnOffer }
