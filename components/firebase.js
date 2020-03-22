import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCl--sGqwSO_ug5dBxCbKaV-RWEryPWwAg",
    authDomain: "react-reminders-dc539.firebaseapp.com",
    databaseURL: "https://react-reminders-dc539.firebaseio.com",
    projectId: "react-reminders-dc539",
    storageBucket: "react-reminders-dc539.appspot.com",
    messagingSenderId: "601666071464",
    appId: "1:601666071464:web:cea2398dafdaab1b7d0b9d",
    measurementId: "G-XZ0TTWB8S0"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export default firebase;
