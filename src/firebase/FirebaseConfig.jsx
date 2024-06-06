// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC592CjsQ0MysSYL3L10i4W-IWh7bDmdtA",
  authDomain: "arnavblog-6cf19.firebaseapp.com",
  projectId: "arnavblog-6cf19",
  storageBucket: "arnavblog-6cf19.appspot.com",
  messagingSenderId: "102631062939",
  appId: "1:102631062939:web:3a9eadb940ef12ecce753e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}