import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqH82XxBJbftafq-73-sfGfy3uYFlyC7M",
    authDomain: "messenger-clone-5b99e.firebaseapp.com",
    databaseURL: "https://messenger-clone-5b99e.firebaseio.com",
    projectId: "messenger-clone-5b99e",
    storageBucket: "messenger-clone-5b99e.appspot.com",
    messagingSenderId: "298168941918",
    appId: "1:298168941918:web:72f363912590b9348e63cf",
    measurementId: "G-R82VTTQ8FN"
});

const db = firebaseApp.firestore();
export default db;