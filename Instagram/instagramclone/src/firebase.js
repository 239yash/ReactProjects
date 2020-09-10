import firebase from 'firebase';

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBHdUXvG0bi-A2JdjD5t61GejBWOf4DPNM",
    authDomain: "instagram-clone-754a9.firebaseapp.com",
    databaseURL: "https://instagram-clone-754a9.firebaseio.com",
    projectId: "instagram-clone-754a9",
    storageBucket: "instagram-clone-754a9.appspot.com",
    messagingSenderId: "993716280059",
    appId: "1:993716280059:web:aae6b75bde43fd4c4cee5e",
    measurementId: "G-BZXM2K900P"
});

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const storage = firebaseapp.storage();

export  {db, auth, storage};