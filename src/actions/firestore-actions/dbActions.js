import { auth, db } from '../../firebase'
import swal from 'sweetalert'
import history from '../../history'

export async function signupAccount (values) {
  let newUser
  try {
    newUser = await auth.createUserWithEmailAndPassword(
      values.email, values.password
    )
  } catch (e) {
    newUser = e
  }  
  
  const uid = newUser.uid
  if (uid) {
    const added = await db.collection('users').doc(uid).set({
      name: values.first + ' ' + values.last, 
      gender: values.sex, 
      phoneNumber: values.phoneNumber,
      address: values.address
    })
    
    swal(
      'Welcome, ' + values.first + '!',
      'You can now log in with your new account..', 
      'success'
    )
    history.push('/login')
  } else {
    swal(
      'Oh no, friend!',
      newUser.message,
      'error'
    )
  }
}