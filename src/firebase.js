import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDMn86xsZQov3KIwemyzT-rscSWfmG_M4A",
  authDomain: "lanka-tutor.firebaseapp.com",
  databaseURL: "https://lanka-tutor.firebaseio.com",
  projectId: "lanka-tutor",
  storageBucket: "lanka-tutor.appspot.com",
  messagingSenderId: "915150734319",
  appId: "1:915150734319:web:c864fb97c0b2a46b6cac1a",
  measurementId: "G-X1LG0W37L7",
});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage };
