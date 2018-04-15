import { db } from '../../firebase'
import swal from 'sweetalert'
import store from '../../store'
import { reset } from 'redux-form'
import { getUser } from './authUser'
import history from '../../history'
import solveFees from '../../components/custom/FeeSolver'

const postTask = async (values) => {
  const uid = getUser().uid // current user
  let {
    title, desc, type, location,
    due, manpower, budget
  } = values

  if (type === 'Online') {
    location = 'Remote'
  }

  const posted = await db
    .collection('tasks')
    .add({
      title,
      desc,
      type,
      location,
      due,
      budget: Number(budget),
      manpower: Number(manpower),
      open: true,
      owner: uid
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

const makeAnOffer = async ({ taskId, offer, reason }) => {
  const { uid, firstName, gender } = getUser()
  const offered = await db
    .collection('bids')
    .add({
      accepted: false,
      taskId,
      owner: uid,
      firstName,
      gender,
      offer,
      reason
    })

  if (offered) {
    swal('Offer made!',
      'You can now wait for the approval...',
      'success'
    )
    history.push('/browse-tasks')
  }
}

// a transaction is added if the user starts to approve offers
// this function allows multiple taskers
const acceptOffer = async (taskerId, taskId, bidId, offer) => {
  let bulk
  try {
    const taskRef = db.collection('tasks').doc(taskId)
    const transRef = db.collection('transactions').doc(taskId)
    const bidRef = db.collection('bids').doc(bidId)
    const { uid } = getUser()

    const fees = solveFees(offer)

    bulk = await db
      .runTransaction(async t => {
        const transdoc = await t.get(transRef)
        const taskdoc = await t.get(taskRef)
        const manpower = await taskdoc.get('manpower')

        // check if a transaction exists with the given taskId
        // if it doesn't, then the task doesn't have
        // any approved bidders yet
        if (!transdoc.exists) {
          // check if there is only one manpower required for the task
          // mark the status of the transaction 'ongoing' if so
          const status = manpower === 1
            ? 'ongoing' : 'pending'

          // add a transaction with the approved tasker
          t.set(transRef, {
            taskId,
            status, // pending, ongoing, completed
            approved: [
              { taskerId, ...fees }
            ],
            owner: uid,
            transactionStart: new Date()
          })

          // mark the bid 'accepted'
          t.update(bidRef, { accepted: true })
          t.update(taskRef, { open: !(manpower === 1) })

          return Promise.resolve(true)
        } else { // if a transaction exists with the given taskId
          const approved = await transdoc.get('approved')
          const taskerBids = approved.filter(bid =>
            bid.taskerId === taskerId
          )

          // check if the current approved list from
          // the transactions collection hasn't
          // reached the manpower quota yet and
          // the tasker hasn't been included yet
          if (approved.length < manpower && !taskerBids.length >= 1) {
            // push new approved bid of the tasker
            approved.push({ taskerId, ...fees })
            t.update(transRef, { approved })

            t.update(bidRef, { accepted: true }) // mark the bid 'accepted'
            t.update(taskRef, {}) // hackish

            // if, after pushing a new transaction,
            // the approved list reached the manpower quota
            if (approved.length === manpower) {
              t.update(taskRef, { open: false }) // mark the task 'close'
              t.update(transRef, { status: 'ongoing' }) // mark the transaction 'ongoing'
              t.update(bidRef, {}) // hackish
            }
            return Promise.resolve(true)
          }
          return Promise.reject(new Error(
            'Either the task is closed, or ' +
            'the tasker is already approved!'
          ))
        }
      })
  } catch (e) {
    swal('Oh, no!', e.message, 'error')
    throw e
  }

  if (bulk) {
    swal('Offer accepted!', '', 'success')
  }
}

const completeTask = async (taskId) => {
  const warned = await swal({
    title: 'Mark this task completed?',
    text: 'If there are multiple taskers, ' +
      'the other taskers might not be done yet! ' +
      'Please collaborate with them and confirm...',
    icon: 'warning',
    buttons: true,
    dangerMode: true
  })

  if (warned) {
    let done
    try {
      done = await db.collection('transactions')
        .doc(taskId)
        .update({
          status: 'completed',
          transactionEnd: new Date()
        })
      done = true
    } catch (e) {
      swal('Oops!', e.message, 'error')
      throw e
    }

    if (done) {
      swal('Yay!',
        'You have marked the task completed',
        'success'
      )
    }
  }
}

export {
  postTask,
  makeAnOffer,
  acceptOffer,
  completeTask
}
