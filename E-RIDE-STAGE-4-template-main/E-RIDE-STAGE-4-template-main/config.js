import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyBd6-ZzdxNUK5ShKI_2fnsHoFmiL90sqCw",
    authDomain: "e-ride-stage-4-60e89.firebaseapp.com",
    projectId: "e-ride-stage-4-60e89",
    storageBucket: "e-ride-stage-4-60e89.appspot.com",
    messagingSenderId: "747928440920",
    appId: "1:747928440920:web:dcfe856c701c402deb3a2d"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


