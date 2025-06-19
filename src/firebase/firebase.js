// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhYuK0vVpHjCCAmWfxDEDP-oVBcSQsZoo",
  authDomain: "task-manager-7488a.firebaseapp.com",
  projectId: "task-manager-7488a",
  storageBucket: "task-manager-7488a.firebasestorage.app",
  messagingSenderId: "259035459530",
  appId: "1:259035459530:web:e7fdec4267e7f06600e933",
  measurementId: "G-1NWPVD3RWT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
