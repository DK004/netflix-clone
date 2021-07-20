// firebase deployment commnads
// firebase login
// firebase init
// firebase deploy

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBO0faQCX9JvTOIcsF5velCe31gnbG-4A",
  authDomain: "netflix-clone-170cd.firebaseapp.com",
  projectId: "netflix-clone-170cd",
  storageBucket: "netflix-clone-170cd.appspot.com",
  messagingSenderId: "255216901092",
  appId: "1:255216901092:web:5dcecab9c14eab6b1045f1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;