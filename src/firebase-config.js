import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpa2bcyWyny9C1k2BUHPYNEOa3uW_lbGo",
  authDomain: "lilycrop-f77be.firebaseapp.com",
  projectId: "lilycrop-f77be",
  storageBucket: "lilycrop-f77be.appspot.com",
  messagingSenderId: "441185790418",
  appId: "1:441185790418:web:80845d5988a4f496a4000b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);