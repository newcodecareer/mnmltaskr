import { auth, db } from '../../firebase'
import history from '../../history'
import swal from 'sweetalert'
import setStatus from '../userActions'
import store from '../../store'

export const signinUser = async (values) => {
  let authed
  try {
    authed = await auth.signInWithEmailAndPassword(
      values.email,
      values.password
    )
  } catch (e) {
    authed = e
  }

  const uid = authed.uid
  if (uid) {
    setActiveUser(uid)
    swal(
      'Good friend!',
      'You have successfully logged in...',
      'success'
    )
  } else {
    swal(
      'Error logging in!',
      authed.message,
      'error'
    )
  }
}

export const signupUser = async (values) => {
  let newUser
  try {
    newUser = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    )
  } catch (e) {
    newUser = e
  }

  const uid = newUser.uid
  if (uid) {
    const signedin = await db.collection('users').doc(uid).set({
      firstName: values.first,
      lastName: values.last,
      email: values.email,
      gender: values.sex,
      phoneNumber: values.phoneNumber,
      address: values.address
    })

    console.log('signedin', signedin)
    console.log('currentUser', auth.currentUser)
    setActiveUser(uid)
    swal(
      'Welcome, ' + values.first + '!',
      'You can now log in with your new account..',
      'success'
    )
  } else {
    swal(
      'Error signing up!',
      newUser.message,
      'error'
    )
  }
}

export const setActiveUser = async (uid) => {
  try {
    const user = await db.collection('users').doc(uid).get()

    localStorage.setItem('user', JSON.stringify(user.data()))
    localStorage.setItem('uid', uid)
    store.dispatch(setStatus())
    history.push('/')
  } catch (e) {
    throw e
  }
}

const removeActiveUser = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('uid')
  store.dispatch(setStatus())
  history.push('/')
}

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return user
}

export const logout = async () => {
  try {
    await auth.signOut()

    removeActiveUser()
    swal(':(', 'You have logged out. Goodbye, friend!')
  } catch (e) {
    throw e
  }
}
