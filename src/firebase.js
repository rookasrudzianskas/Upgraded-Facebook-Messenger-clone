import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbJ9df2dse3xtmS1nH1LNklmWePGbagPU",
    authDomain: "facebook-messenger-clo-7bc45.firebaseapp.com",
    projectId: "facebook-messenger-clo-7bc45",
    storageBucket: "facebook-messenger-clo-7bc45.appspot.com",
    messagingSenderId: "49238735974",
    appId: "1:49238735974:web:009b7918278f574f1801a7",
    measurementId: "G-TKX4JZ6EBP"
});

const db = firebaseApp.firestore();
export default db;