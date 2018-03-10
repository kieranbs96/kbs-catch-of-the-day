import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiR4EZfnCF2YzmQCzzUnNfeR9wdLKqOGw",
  authDomain: "kbs-catch-of-the-day.firebaseapp.com",
  databaseURL: "https://kbs-catch-of-the-day.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;