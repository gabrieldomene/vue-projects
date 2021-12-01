import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCbQ5lGWSXGEfw3wAgggBsii0hSwtCqSv8",
  authDomain: "udemy-firebase-project-a2b00.firebaseapp.com",
  projectId: "udemy-firebase-project-a2b00",
  storageBucket: "udemy-firebase-project-a2b00.appspot.com",
  messagingSenderId: "191088823666",
  appId: "1:191088823666:web:8785bff85e65ee2afa21eb"
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();
const timestamp = serverTimestamp();

export { db, timestamp, auth }