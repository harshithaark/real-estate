// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-801f5.firebaseapp.com",
  projectId: "real-estate-801f5",
  storageBucket: "real-estate-801f5.appspot.com",
  messagingSenderId: "187670321865",
  appId: "1:187670321865:web:abc8245516bd995f368b18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);