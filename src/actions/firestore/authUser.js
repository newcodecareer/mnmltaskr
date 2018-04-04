import { auth, db } from '../../firebase'
import history from '../../history'
import swal from 'sweetalert'
import setStatus from '../userActions'
import { toggleSidebar } from '../menuActions'
import store from '../../store'

const signinUser = async (values) => {
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

const signupUser = async (values) => {
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

const setActiveUser = async (uid) => {
  try {
    let user = await db.collection('users').doc(uid).get()
    user = { ...user.data(), uid }

    localStorage.setItem('user', JSON.stringify(user))
    store.dispatch(setStatus())
    history.push('/')
  } catch (e) {
    throw e
  }
}

const removeActiveUser = () => {
  localStorage.removeItem('user')

  if (store.getState().menu.visible) {
    store.dispatch(toggleSidebar())
  }
  store.dispatch(setStatus())

  history.push('/')
}

const getUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const logout = async () => {
  try {
    await auth.signOut()

    removeActiveUser()
    swal(':(', 'You have logged out. Goodbye, friend!')
  } catch (e) {
    throw e
  }
}

export {
  signinUser,
  signupUser,
  getUser,
  logout
}
