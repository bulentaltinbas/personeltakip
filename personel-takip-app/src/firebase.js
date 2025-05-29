
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC03sZEqGGlxdN8coCqyEuK5wIjDawJi_0",
  authDomain: "personeltakipsistemi-7d2f3.firebaseapp.com",
  projectId: "personeltakipsistemi-7d2f3",
  storageBucket: "personeltakipsistemi-7d2f3.firebasestorage.app",
  messagingSenderId: "855721389714",
  appId: "1:855721389714:web:c11bf83c1bcba12529804b",
  measurementId: "G-GL6HT4N5Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
