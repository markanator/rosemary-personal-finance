/* eslint-disable no-undef */
import firebase from 'firebase';
import 'firebase/firestore';
// TODO: this shouldn't be directly in our source code. we don't want to commit this to GitHub
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

if (!firebaseConfig.apiKey)
  throw new Error('Missing firebase credential: apiKey');
if (!firebaseConfig.authDomain)
  throw new Error('Missing firebase credential: authDomain');
if (!firebaseConfig.projectId)
  throw new Error('Missing firebase credential: projectId');
if (!firebaseConfig.storageBucket)
  throw new Error('Missing firebase credential: storageBucket');
if (!firebaseConfig.messagingSenderId)
  throw new Error('Missing firebase credential: messagingSenderId');
if (!firebaseConfig.appId)
  throw new Error('Missing firebase credential: appId');

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
