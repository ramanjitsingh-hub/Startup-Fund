// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvPIvpRUN4iAytm6iLInY9N6Dl6jN0J_0",
  authDomain: "startupfund-b0508.firebaseapp.com",
  projectId: "startupfund-b0508",
  storageBucket: "startupfund-b0508.firebasestorage.app",
  messagingSenderId: "546633940059",
  appId: "1:546633940059:web:0ffde52a89f264185a537e",
  measurementId: "G-E94GVT8CNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);