import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMiUSDRQYfZd-KbK-K7hF2HTFiM1KRJYA",
  authDomain: "market-app-01.firebaseapp.com",
  projectId: "market-app-01",
  storageBucket: "market-app-01.appspot.com",
  messagingSenderId: "436744471839",
  appId: "1:436744471839:web:4599ac870f6895fdd85c2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()