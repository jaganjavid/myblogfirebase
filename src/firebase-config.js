// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXAoJppjAPjFBlGXumUexcWLXHd8zHfZ0",
  authDomain: "my-blog-28bb0.firebaseapp.com",
  projectId: "my-blog-28bb0",
  storageBucket: "my-blog-28bb0.appspot.com",
  messagingSenderId: "71193919742",
  appId: "1:71193919742:web:03a6ebd93be70949c025af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();