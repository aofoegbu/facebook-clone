// import * as firebase from "firebase/app";
// import firebase from '../firebase';
import firebase from 'firebase/app';
import "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBwyWY9Z7it3Whh2HjTiQPVAcRaXFDlX0M",
  authDomain: "ogelo-facebook-clone.firebaseapp.com",
  projectId: "ogelo-facebook-clone",
  storageBucket: "ogelo-facebook-clone.appspot.com",
  messagingSenderId: "629080940259",
  appId: "1:629080940259:web:3af77db273bd597b0e6fd6"
};

// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage();

export { db, storage };