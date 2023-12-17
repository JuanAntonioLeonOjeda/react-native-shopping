// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByl0qTb9YwW_i1q_yHDlfxWFNZZeEALXI",
  authDomain: "shopping-5e726.firebaseapp.com",
  projectId: "shopping-5e726",
  storageBucket: "shopping-5e726.appspot.com",
  messagingSenderId: "670436435200",
  appId: "1:670436435200:web:ce6603750ce7cd3f2a3fe5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db