import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "-73-sfGfy3uYFlyC7M",
    authDomain: "messenger-clone-5b99e.firebaseapp.com",
    databaseURL: "https://messenger-clone-5b99e.firebaseio.com",
    projectId: "messenger-clone-5b99e",
    storageBucket: "messenger-clone-5b99e.appspot.com",
    messagingSenderId: "",
    appId: "1:29816894918:web:",
    measurementId: "G-"
});

const db = firebaseApp.firestore();
export default db;
