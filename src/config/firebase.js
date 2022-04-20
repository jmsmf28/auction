import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDpT01D3ffQhWLPB0CurLCQH_CGDtCq3NA',
  authDomain: 'auctioneer-19e65.firebaseapp.com',
  datbaseURL: 'gs://auctioneer-19e65.appspot.com',
  projectId: 'auctioneer-19e65',
  storageBucket: 'auctioneer-19e65.appspot.com',
  messagingSenderId: '1070928219090',
  appId: '1:1070928219090:web:257f7e1e0ead94df0fd60b',
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
