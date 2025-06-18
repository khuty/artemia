// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "artemia-1e284.firebaseapp.com",
  projectId: "artemia-1e284",
  storageBucket: "artemia-1e284.firebasestorage.app",
  messagingSenderId: "178286664183",
  appId: "1:178286664183:web:0c63556af6e0ec3f99b6f2"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}