import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCAiXMBhr62HqFbH294MIDHeWAPxurcuHI",
  authDomain: "catch-of-the-day-adrian-87833.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-adrian-87833.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
