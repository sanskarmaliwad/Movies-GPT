// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtKET3gqnZP43LE0bk9gk5fYweomjLjfg",
  authDomain: "netflix-gpt-3791a.firebaseapp.com",
  projectId: "netflix-gpt-3791a",
  storageBucket: "netflix-gpt-3791a.appspot.com",
  messagingSenderId: "616376035082",
  appId: "1:616376035082:web:16c6b00cbf44649d103cf3",
  measurementId: "G-8DE7ZDQTDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();