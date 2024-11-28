// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSS389lGy6KQOxs4HJYzdZzcCB77jOi1I",
  authDomain: "daily-a00e9.firebaseapp.com",
  projectId: "daily-a00e9",
  storageBucket: "daily-a00e9.firebasestorage.app",
  messagingSenderId: "470861410644",
  appId: "1:470861410644:web:02929ced5dc43e9cfc98c1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);