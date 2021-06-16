import firebase from "firebase/app";
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyB3fQcw0WAAhcNicypXStJcCKFq1V75ew8",
    authDomain: "appmedicamentos-36c68.firebaseapp.com",
    projectId: "appmedicamentos-36c68",
    storageBucket: "appmedicamentos-36c68.appspot.com",
    messagingSenderId: "250381224248",
    appId: "1:250381224248:web:5cbb43a8db1f58efe499cd",
    measurementId: "G-X02TR3JQEF"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase;