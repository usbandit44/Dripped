import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv_falv5q8vFVTu9R6_nvIZtv74sWXprk",
  authDomain: "dripped-6721e.firebaseapp.com",
  projectId: "dripped-6721e",
  storageBucket: "dripped-6721e.appspot.com",
  messagingSenderId: "288858784119",
  appId: "1:288858784119:web:d7d193f56430367ae3e172",
  measurementId: "G-LMVMXY652B",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
