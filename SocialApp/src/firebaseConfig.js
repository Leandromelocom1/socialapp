// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJVQ4PD_QoDKzEYsEXNPKaUBx7zNuXTJc",
  authDomain: "socialapp-71257.firebaseapp.com",
  projectId: "socialapp-71257",
  storageBucket: "socialapp-71257.appspot.com",
  messagingSenderId: "502807741409",
  appId: "1:502807741409:android:7870f0ef6b3fcd1f8d48a0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
