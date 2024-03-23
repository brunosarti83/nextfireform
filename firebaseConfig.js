// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnVV9qK2l2y4dLeYE8nEaS-NVjHAxyxSg",
  authDomain: "next-fire-form.firebaseapp.com",
  projectId: "next-fire-form",
  storageBucket: "next-fire-form.appspot.com",
  messagingSenderId: "555843677057",
  appId: "1:555843677057:web:0695fd97e79cf97bfad680",
  measurementId: "G-PCLCLDY07R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);