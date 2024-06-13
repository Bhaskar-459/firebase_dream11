// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase , ref , child , get , set , update, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAV51NVJWGU56bcickPIzO9GpXM7-wS4BQ",
  authDomain: "golden-academy-425106-h9.firebaseapp.com",
  projectId: "golden-academy-425106-h9",
  storageBucket: "golden-academy-425106-h9.appspot.com",
  messagingSenderId: "1071951924875",
  appId: "1:1071951924875:web:e13ec19336c727a84c4e8e",
  measurementId: "G-GF0M0MH9JX"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db , ref , child , get , set , update, remove };