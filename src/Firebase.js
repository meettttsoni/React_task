// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8NmwjywT35AEwhPNutueRuZkWRon-DUY",
  authDomain: "visinoray.firebaseapp.com",
  databaseURL: "https://visinoray-default-rtdb.firebaseio.com",
  projectId: "visinoray",
  storageBucket: "visinoray.firebasestorage.app",
  messagingSenderId: "557585046380",
  appId: "1:557585046380:web:08e34472f97b792d1f3149",
  measurementId: "G-WGRVFW17GM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);