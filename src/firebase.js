import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBrKIc41PLzeLYuct1Djn9-ZzuGGx8UoE",
    authDomain: "netflix-562a5.firebaseapp.com",
    projectId: "netflix-562a5",
    storageBucket: "netflix-562a5.appspot.com",
    messagingSenderId: "1019757399055",
    appId: "1:1019757399055:web:f1526d24dee43b4e63677a",
    measurementId: "G-NQHPCQYT4R"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export {auth};
 export default db;
