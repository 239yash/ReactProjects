import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIza3HheJoJVHnZTY",
    authDomain: "wtfwhatsappclone.firebaseapp.com",
    databaseURL: "https://wtfwhatsappclone.firebaseio.com",
    projectId: "wtfwhatsappclone",
    storageBucket: "wtfwhatsappclone.appspot.com",
    messagingSenderId: "",
    appId: "1:1080296426:web:",
    measurementId: "G-3MCDFGTQP"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
