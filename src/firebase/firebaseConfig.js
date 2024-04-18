// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDNNImtQmTpLG0wB6NFgBOLsyeMc50Jw",
  authDomain: "ksea-app-a1c80.firebaseapp.com",
  projectId: "ksea-app-a1c80",
  storageBucket: "ksea-app-a1c80.appspot.com",
  messagingSenderId: "270722745588",
  appId: "1:270722745588:web:db185108f9129be04ccaa1",
  measurementId: "G-1740YBECYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);