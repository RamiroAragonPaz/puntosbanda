// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASIrwP68wn_7YB_8xO-20ZtuyS38EGxgQ",
  authDomain: "puntosbanda.firebaseapp.com",
  projectId: "puntosbanda",
  storageBucket: "puntosbanda.appspot.com",
  messagingSenderId: "1082177190191",
  appId: "1:1082177190191:web:a8e6e813e722f8b854c9da",
  measurementId: "G-KZZWFS6JPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db