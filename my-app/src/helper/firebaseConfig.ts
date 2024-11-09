import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDl46g6aLPLnnZKG_Mc1GC6OMFKXAauelg",
  authDomain: "appwrite-d2f0d.firebaseapp.com",
  projectId: "appwrite-d2f0d",
  storageBucket: "appwrite-d2f0d.firebasestorage.app",
  messagingSenderId: "703656536899",
  appId: "1:703656536899:web:853867f0eafe7425c81df6",
  measurementId: "G-64VS3V3X2B"
};

// Initialize Firebase and Firebase services
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);            // Export the authentication service
export const db = getFirestore(app);         // Export the Firestore service

export default app;
