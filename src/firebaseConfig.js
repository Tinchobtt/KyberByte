// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNSKWvWlcFEmyuz_aoFYp03PHAfQw3u_k",
  authDomain: "ecommerce-react-4002e.firebaseapp.com",
  projectId: "ecommerce-react-4002e",
  storageBucket: "ecommerce-react-4002e.appspot.com",
  messagingSenderId: "590643913368",
  appId: "1:590643913368:web:cf2fced27e5dc7cb5666ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
