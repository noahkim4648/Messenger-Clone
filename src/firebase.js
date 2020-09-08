import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAJG9BMLZ67WcDus6RRDDoueMLR5ISA36c",
    authDomain: "facebook-messenger-clone-3ffa0.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-3ffa0.firebaseio.com",
    projectId: "facebook-messenger-clone-3ffa0",
    storageBucket: "facebook-messenger-clone-3ffa0.appspot.com",
    messagingSenderId: "129360113928",
    appId: "1:129360113928:web:74f6a6d1139345b1843cbd",
    measurementId: "G-JC3QYGVQES"
  });

  const db = firebaseApp.firestore();
  export default db;