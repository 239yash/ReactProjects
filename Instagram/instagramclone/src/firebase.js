import firebase from 'firebase';

const firebaseapp = firebase.initializeApp({
    apiKey: "-A2JdjD5t61GejBWOf4DPNM",
    authDomain: "instagram-clone-754a9.firebaseapp.com",
    databaseURL: "https://instagram-clone-754a9.firebaseio.com",
    projectId: "instagram-clone-754a9",
    storageBucket: "instagram-clone-754a9.appspot.com",
    messagingSenderId: "",
    appId: "1::web:aae6b75bde43fd4c4cee5e",
    measurementId: "G-"
});

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const storage = firebaseapp.storage();

export  {db, auth, storage};
