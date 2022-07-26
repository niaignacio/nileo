// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjCIwX9S6TWIjaWwKUnEMSz2DyhTC5vdI",
  authDomain: "nileo-a977d.firebaseapp.com",
  projectId: "nileo-a977d",
  storageBucket: "nileo-a977d.appspot.com",
  messagingSenderId: "946416314751",
  appId: "1:946416314751:web:6d176c5a9085b81bebd24a"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
     app = firebase.initializeApp(firebaseConfig);
} else {
     app = firebase.app()
}

const auth = firebase.auth()

 export {auth};
