// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSMtWEzA3NvFkOhI7oj0CiCxV4b_eL5VQ",
  authDomain: "fes-navigation.firebaseapp.com",
  projectId: "fes-navigation",
  storageBucket: "fes-navigation.appspot.com",
  messagingSenderId: "748819814862",
  appId: "1:748819814862:web:ce352ac2c358aebdc1f39f"
};

// Initialize Firebase
export const auth = getAuth(); 
const app = initializeApp(firebaseConfig);