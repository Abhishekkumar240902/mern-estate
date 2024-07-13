// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ea8a.firebaseapp.com",
  projectId: "mern-estate-2ea8a",
  storageBucket: "mern-estate-2ea8a.appspot.com",
  messagingSenderId: "720806144389",
  appId: "1:720806144389:web:e912d502e3761e7a69bcec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);