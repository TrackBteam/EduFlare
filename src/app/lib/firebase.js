// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAinwxaOJ6j9IIQL0yXM6cij1VCpLqwQ2s",
  authDomain: "eduflare-71d36.firebaseapp.com",
  projectId: "eduflare-71d36",
  storageBucket: "eduflare-71d36.appspot.com",
  messagingSenderId: "338278917747",
  appId: "1:338278917747:web:939a77b73ea1d7ece7ec06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
