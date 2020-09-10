import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAnYxnSOxVEstZzlEvKKT3HheJoJVHnZTY",
    authDomain: "wtfwhatsappclone.firebaseapp.com",
    databaseURL: "https://wtfwhatsappclone.firebaseio.com",
    projectId: "wtfwhatsappclone",
    storageBucket: "wtfwhatsappclone.appspot.com",
    messagingSenderId: "1080296566426",
    appId: "1:1080296566426:web:df47e8ce36dfbe58587923",
    measurementId: "G-3MCDFGBTQP"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;