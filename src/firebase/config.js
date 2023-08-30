// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


export const firebaseConfig = {
  apiKey: "AIzaSyDrPhB8wCKlVqq1oTlVscbCCF7SiSiwhmI",
  authDomain: "eshop-6b0fd.firebaseapp.com",
  projectId: "eshop-6b0fd",
  storageBucket: "eshop-6b0fd.appspot.com",
  messagingSenderId: "1069406541615",
  appId: "1:1069406541615:web:2c59fcbeeb1fc49185b3da",
  measurementId: "G-W6NBG4SCQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;