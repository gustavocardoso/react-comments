import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANEhoSS4xzkayqnpw5IH-ktfIbPkd95Nk",
  authDomain: "reactjs-a066d.firebaseapp.com",
  databaseURL: "https://reactjs-a066d.firebaseio.com",
  projectId: "reactjs-a066d",
  storageBucket: "reactjs-a066d.appspot.com",
  messagingSenderId: "705028991595"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base
