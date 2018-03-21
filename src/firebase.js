import * as firebase from "firebase"
import 'firebase/firestore'

// const firebase = require('firebase')
// require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyA1Cil7pJToX2ZIJdLfw6-GIHn2lh71woE",
  authDomain: "mnmltaskr.firebaseapp.com",
  databaseURL: "https://mnmltaskr.firebaseio.com",
  projectId: "mnmltaskr",
  storageBucket: "mnmltaskr.appspot.com",
  messagingSenderId: "619300476823"
})

const db = firebase.firestore()

// const batch = db.batch()
// const col = db.collection('postedTasks')
// batch.set(col.doc(), {
//   budget: 40,
//   description: 'I need to do this with you, my friend',
//   due: new Date(),
//   location: 'Quintin Salas, Iloilo City',
//   numberOfTaskers: 3,
//   title: 'Be with me at my worst',
//   type: 'In person'
// })
// batch.set(col.doc(), {
//   budget: 500,
//   description: 'Pls watch over the number of likes my profile pic have',
//   due: new Date(),
//   location: 'Alta Tierra, Iloilo City',
//   numberOfTaskers: 1,
//   title: 'Wanted security guard',
//   type: 'Online'
// })

// batch.commit()
//   .then(function () {
//     console.log('db write success')
//   })
//   .catch(function () {
//     console.log('db write failed')
//   })

export default db
