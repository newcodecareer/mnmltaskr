import { auth } from '../firebase'
import history from '../history'

export async function authUser (values) {
  const authed = await auth.signInWithEmailAndPassword(
    values.email, 
    values.password
  ).catch((e) => { 
    // used this instead of try/catch 
    // because try/catch doesn't catch 
    // all firestore errors which is weird
    return e
  })

  if (authed.email) {
    alert('logged in')
    history.push('/')
  } else {
    alert(authed.toString())
  }
}

