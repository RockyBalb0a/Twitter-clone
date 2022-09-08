import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA0GSFHKaVtU2AlnvwDjGFK3T-XIjpFQ_g",
    authDomain: "twitter-clone-36464.firebaseapp.com",
    projectId: "twitter-clone-36464",
    storageBucket: "twitter-clone-36464.appspot.com",
    messagingSenderId: "622403562278",
    appId: "1:622403562278:web:ede577aa17f2ff20cf2fe7",
    measurementId: "G-1QBXHD0F0D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  
  export default db;