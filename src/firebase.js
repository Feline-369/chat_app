
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq2jBP00jaXF8ULZtwO5MRfJydeOzLar4",
  authDomain: "chat-1f2e2.firebaseapp.com",
  projectId: "chat-1f2e2",
  storageBucket: "chat-1f2e2.appspot.com",
  messagingSenderId: "372647255409",
  appId: "1:372647255409:web:9f52326c61c55009e66ad0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
