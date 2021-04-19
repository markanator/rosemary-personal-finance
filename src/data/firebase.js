import firebase from "firebase";
import "firebase/firestore";
// TODO: this shouldn't be directly in our source code. we don't want to commit this to GitHub
const firebaseConfig = {
    apiKey: "AIzaSyDZvfnTd6Djm9L4p0uY-g5XUUgSmlvR1YY",
    authDomain: "rosemary-personal-finance.firebaseapp.com",
    projectId: "rosemary-personal-finance",
    storageBucket: "rosemary-personal-finance.appspot.com",
     messagingSenderId: "16827964946",
    appId: "1:16827964946:web:d034a2c564f06b702502cb",
     measurementId: "G-7GN4JY1ZJ5"
};

if(!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
if(!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
if(!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
if(!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
if(!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
if(!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
if(!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db, firebase};