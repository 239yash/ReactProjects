import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1lDB669jLdYHJ9eIu-Cb80c2AEAiXxDg",
    authDomain: "wtftwitterclone.firebaseapp.com",
    databaseURL: "https://wtftwitterclone.firebaseio.com",
    projectId: "wtftwitterclone",
    storageBucket: "wtftwitterclone.appspot.com",
    messagingSenderId: "113358064099",
    appId: "1:113358064099:web:0797dc297d8b92746db8d6",
    measurementId: "G-750QTV5J1V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;