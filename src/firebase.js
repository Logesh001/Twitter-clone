//import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB6QLnlgK_93dlQe4ydfFzA0GebH7rp-UM",
    authDomain: "twitter-clone-4eec3.firebaseapp.com",
    projectId: "twitter-clone-4eec3",
    storageBucket: "twitter-clone-4eec3.appspot.com",
    messagingSenderId: "584494075204",
    appId: "1:584494075204:web:9372acaf038b04efa55b11",
    measurementId: "G-0QESFSM2NH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;