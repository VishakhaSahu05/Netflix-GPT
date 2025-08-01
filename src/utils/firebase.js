// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp3IdrhZZMpRphvN6q43EmhWIe48n-Vy0",
  authDomain: "netflixgpt-481ee.firebaseapp.com",
  projectId: "netflixgpt-481ee",
  storageBucket: "netflixgpt-481ee.appspot.com",
  messagingSenderId: "670591295772",
  appId: "1:670591295772:web:dff1b463cb936ecae91ad9",
  measurementId: "G-RBBGTZ9XJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);