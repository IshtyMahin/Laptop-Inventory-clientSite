// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcb3duysy4rISI-MBb2Tq_uymFdhK7Ps",
  authDomain: "assignment-10-9b8c8.firebaseapp.com",
  projectId: "assignment-10-9b8c8",
  storageBucket: "assignment-10-9b8c8.appspot.com",
  messagingSenderId: "70476108286",
  appId: "1:70476108286:web:ff54834f2569afc625f0af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;