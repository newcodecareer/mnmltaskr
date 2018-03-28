import { auth } from '../firebase'
import history from '../history'
import swal from 'sweetalert'
import setStatus from '../actions/statusActions'
import store from '../store'

export async function authUser (values) {
  const authed = await auth.signInWithEmailAndPassword(
    values.email, 
    values.password
  ).catch((e) => { 
    // used this instead of try/catch 
    // because try/catch doesn't catch 
    // all firestore errors
    return e
  })

  if (authed.email) {
    localStorage.setItem(
      'user', 
      JSON.stringify(auth.currentUser)
    )
    store.dispatch(setStatus())

    swal(
      'Good friend!', 
      'You have successfully logged in...', 
      'success'
    )
    history.push('/')
  } else {
    swal(
      'No, friend!', 
      authed.message, 
      'error'
    )
  }
}

export async function logout () {
  try {
    const out = await auth.signOut()
    localStorage.removeItem('user')
    store.dispatch(setStatus())
    swal(':(', 'You have logged out. Goodbye, friend!')
    history.push('/')
  }
  catch (e) {
    throw e
  }
}

