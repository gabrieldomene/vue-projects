import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "API KEY HASH",
  authDomain: "AUTH DOMAIN URL",
  projectId: "PROJECT ID GENERATED",
  storageBucket: "STORAGE BUCKET URL",
  messagingSenderId: "SENDER ID",
  appId: "APP ID NUMBER"
};

// init firebase
initializeApp(firebaseConfig);

// INIT SERVICES
const db = getFirestore();
const timestamp = serverTimestamp()

export { db, timestamp }
