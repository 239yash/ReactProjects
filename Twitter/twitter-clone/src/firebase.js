import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "-Cb80c2AEAiXxDg",
    authDomain: "wtftwitterclone.firebaseapp.com",
    databaseURL: "https://wtftwitterclone.firebaseio.com",
    projectId: "wtftwitterclone",
    storageBucket: "wtftwitterclone.appspot.com",
    messagingSenderId: "",
    appId: "1:11335864099:web:",
    measurementId: "G-"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
