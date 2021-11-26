import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'
import 'firebase/compat/database'

import { getFirestore } from "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBFVq-JpzZLeBBDJ8EqYbjnH8frkPnaYQc",
  authDomain: "animeai-dev-e098a.firebaseapp.com",
  databaseURL:"https://animeai-dev-e098a-default-rtdb.firebaseio.com",
  projectId: "animeai-dev-e098a",
  storageBucket: "animeai-dev-e098a.appspot.com",
  messagingSenderId: "551936630894",
  appId: "1:551936630894:web:964271f31abb702ef8067f"
})

export const auth = app.auth()
//export const fsdb =  firebase.firestore().enablePersistence()
export const fsdb = firebase.firestore()
export const rtdb = firebase.database()
export default app 