// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARtRweZms2guYD1SVPnJFyjMIoRPlbnsk",
  authDomain: "takeoff-staff-26b33.firebaseapp.com",
  projectId: "takeoff-staff-26b33",
  storageBucket: "takeoff-staff-26b33.appspot.com",
  messagingSenderId: "327080274451",
  appId: "1:327080274451:web:cee99cac442990a7426de6",
  measurementId: "G-4ML2TSZ7B3",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;
