// @flow
import Rebase from 're-base'
import firebase from '@firebase/app'
import database from '@firebase/database'

export const app = firebase.initializeApp({
  apiKey: "AIzaSyANgQJp0-4tPkkopGIlulwiAiAll0VFPqQ",
  authDomain: "com-willhackett.firebaseapp.com",
  databaseURL: "https://com-willhackett.firebaseio.com",
  storageBucket: "com-willhackett.appspot.com",
})

export const db = firebase.database(app)

export const base = Rebase.createClass(db)
