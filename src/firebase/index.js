// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuW1xWtQtefZwUcVaXfjfzKOOhQSCkRdo",
  authDomain: "whitespace-1573523781655.firebaseapp.com",
  projectId: "whitespace-1573523781655",
  storageBucket: "whitespace-1573523781655.appspot.com",
  messagingSenderId: "974117847305",
  appId: "1:974117847305:web:e483455c1a23bd11e693d8",
  measurementId: "G-DPJTKENJ20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;