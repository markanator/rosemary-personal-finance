// Brings in the core functionality:
import firebase from "firebase/app";

// Brings in the specific services we want to use:
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
  if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
  if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
  if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
  if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
  if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
  //if (!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();



  export {db, auth, provider, firebase};
