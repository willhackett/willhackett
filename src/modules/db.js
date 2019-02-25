import firebase from 'firebase'
import rebase from 're-base'

firebase.initializeApp({
  apiKey: "AIzaSyD7tM56qEhIv01OMXNJ83-PpTya-tOWeiM",
  authDomain: "will-hackett.firebaseapp.com",
  databaseURL: "https://will-hackett.firebaseio.com",
  projectId: "will-hackett",
  storageBucket: "will-hackett.appspot.com",
  messagingSenderId: "567999273365"
});

export default rebase.createClass(firebase.database())