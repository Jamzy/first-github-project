// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbPGyt_8r-ivzfuMNGTFb8JcIaUf1zEGo",
  authDomain: "fir-practice-b3d6e.firebaseapp.com",
  projectId: "fir-practice-b3d6e",
  storageBucket: "fir-practice-b3d6e.appspot.com",
  messagingSenderId: "761016308607",
  appId: "1:761016308607:web:ff16228f62531466a1004a",
  measurementId: "G-H581WDCX6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 
export const db = getFirestore(); 