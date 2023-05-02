// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCN7cgBbwDEeYoGmHi3I8wGUlxnFWtm50",
  authDomain: "desi-chefs-recipes.firebaseapp.com",
  projectId: "desi-chefs-recipes",
  storageBucket: "desi-chefs-recipes.appspot.com",
  messagingSenderId: "928837094421",
  appId: "1:928837094421:web:abbd6656f6276001f4121c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;