// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDSS389lGy6KQOxs4HJYzdZzcCB77jOi1I",
//   authDomain: "daily-a00e9.firebaseapp.com",
//   projectId: "daily-a00e9",
//   storageBucket: "daily-a00e9.firebasestorage.app",
//   messagingSenderId: "470861410644",
//   appId: "1:470861410644:web:9aaa4022a0834034fc98c1",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAvOmxgTuwzPWj4JFc4DkC_6ast5zehZjc",
  authDomain: "dailly-9322f.firebaseapp.com",
  projectId: "dailly-9322f",
  storageBucket: "dailly-9322f.firebasestorage.app",
  messagingSenderId: "308190621147",
  appId: "1:308190621147:web:cc968dbed31c84f3408bfe",
  measurementId: "G-8D2WB0RR2M"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
