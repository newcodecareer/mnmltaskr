import { auth } from '../firebase'

export async function authUser (values) {
  try {
    console.log('email', values.email)
    console.log('email type', typeof values.email)
    console.log('pass', values.password)
    console.log('pass type', typeof values.password)

    const authed = await auth
      .signInWithEmailAndPassword(
        values.email, 
        values.password
      )
    console.log(authed)
  } catch (e) {
    console.log('error siya friend', e)
  }
}
