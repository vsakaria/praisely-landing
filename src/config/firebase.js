// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNH5c975pjgFhKRRQlTqLxiGPk1b4zGj0",
  authDomain: "praisely-a0353.firebaseapp.com",
  projectId: "praisely-a0353",
  storageBucket: "praisely-a0353.firebasestorage.app",
  messagingSenderId: "939148563473",
  appId: "1:939148563473:web:1b11eec83931ffdc3bcdb0",
  measurementId: "G-94RJD8Z83T"
};

console.log("\x1b[1m\x1b[32mFirebase configuration loaded\x1b[0m");

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
