// Import the functions you need from the SDKs you need
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv_falv5q8vFVTu9R6_nvIZtv74sWXprk",
  authDomain: "dripped-6721e.firebaseapp.com",
  projectId: "dripped-6721e",
  storageBucket: "dripped-6721e.appspot.com",
  messagingSenderId: "288858784119",
  appId: "1:288858784119:web:d7d193f56430367ae3e172",
  measurementId: "G-LMVMXY652B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
