import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyD6pg_ab5r54IFITwfkKeitz859-H-wLRI",
  authDomain: "prueba-18fce.firebaseapp.com",
  projectId: "prueba-18fce",
  storageBucket: "prueba-18fce.appspot.com",
  messagingSenderId: "832136314365",
  appId: "1:832136314365:web:22d7eb839ee8497fdcad94"
};
const App = initializeApp(firebaseConfig);


