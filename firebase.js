// firebase.js - FINDIT-PH Database Connection
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// REPLACE WITH YOUR FIREBASE CONFIG FROM PROJECT SETTINGS
export const firebaseConfig = {
  apiKey: "AIzaSyB3PfjfnBDe6atBpDuqIQg7lISUKu2YuFw",
  authDomain: "findit-ph-e1d0f.firebaseapp.com",
  projectId: "findit-ph-e1d0f",
  storageBucket: "findit-ph-e1d0f.firebasestorage.app",
  messagingSenderId: "18398015033",
  appId: "1:18398015033:web:53a46e7e32b7f6cdeb27e8"
};


