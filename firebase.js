import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyArLJD5HMwxyG3M4ro3C11BqzeFvxk3IBg',
  authDomain: 'fir-chat-4cdd2.firebaseapp.com',
  projectId: 'fir-chat-4cdd2',
  storageBucket: 'fir-chat-4cdd2.appspot.com',
  messagingSenderId: '862018615364',
  appId: '1:862018615364:web:c70ab36436f38a123da411',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
