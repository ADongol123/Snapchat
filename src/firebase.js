import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJLv0FwXMtRVjFqIfjPlXli9oyue1a_GU",
  authDomain: "covid-19-6d648.firebaseapp.com",
  databaseURL: "https://covid-19-6d648.firebaseio.com",
  projectId: "covid-19-6d648",
  storageBucket: "covid-19-6d648.appspot.com",
  messagingSenderId: "533644386758",
  appId: "1:533644386758:web:c5f4c2f4c0540bb4cc12c7",
  measurementId: "G-3GX60EPL45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
