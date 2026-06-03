// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAohor0Q2h_SedqqqdNNJh3wdi9379Tz2g",
  authDomain: "namaste-food-c5339.firebaseapp.com",
  projectId: "namaste-food-c5339",
  storageBucket: "namaste-food-c5339.firebasestorage.app",
  messagingSenderId: "865394789661",
  appId: "1:865394789661:web:53b696881e41dbac7025f4",
  measurementId: "G-6ERY9TM1YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();