import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDC-SgWfxPejB0DtO9TJfIGOOZlm7uGJAs",
    authDomain: "clone-8b572.firebaseapp.com",
    projectId: "clone-8b572",
    storageBucket: "clone-8b572.appspot.com",
    messagingSenderId: "256190883972",
    appId: "1:256190883972:web:cb27130ab3f247e2813ad1",
    measurementId: "G-91DSMGEHLL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };