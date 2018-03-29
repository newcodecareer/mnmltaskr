import * as firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyA1Cil7pJToX2ZIJdLfw6-GIHn2lh71woE',
  authDomain: 'mnmltaskr.firebaseapp.com',
  databaseURL: 'https://mnmltaskr.firebaseio.com',
  projectId: 'mnmltaskr',
  storageBucket: 'mnmltaskr.appspot.com',
  messagingSenderId: '619300476823'
})

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth }
