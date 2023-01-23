import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWDggqVQy2jhNUT6ThnDsTokZ-TN4Gi1U",
  authDomain: "movie-swap-2ea99.firebaseapp.com",
  projectId: "movie-swap-2ea99",
  storageBucket: "movie-swap-2ea99.appspot.com",
  messagingSenderId: "849605581227",
  appId: "1:849605581227:web:912febaa8c9b91cd6f5aee",
  measurementId: "G-Z3QR1X7LN4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
